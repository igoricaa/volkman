'use client';

export * from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import styles from './ConnectedGrid.module.scss';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import {
  projectsGalleryImageStyles,
  projectsGalleryImageStylesMobile,
} from '@/data/data';
import { useState, useEffect } from 'react';

export default function ConnectedGrid({ gridContent, endingText }) {
  gsap.registerPlugin(ScrollTrigger);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
      setIsMobile(!isDesktop);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    const grid = document.querySelector(`.${styles.grid}`);
    const gridItems = grid.querySelectorAll(`.${styles.gridItem}`);

    const initSmoothScrolling = () => {
      let lenis = new Lenis({
        lerp: 0.15,
        smoothWheel: true,
      });

      lenis.on('scroll', () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    const scroll = () => {
      gridItems.forEach((item) => {
        const previousElementSibling = item.previousElementSibling;
        const isLeftSide =
          previousElementSibling &&
          item.offsetLeft + item.offsetWidth <=
            previousElementSibling.offsetLeft + 1;

        const originX = isLeftSide ? 100 : 0;

        const tl = gsap.timeline({
          defaults: {
            duration: 1,
            ease: 'power4',
          },
          scrollTrigger: {
            trigger: item,
            start: 'top bottom-=15%',
            end: '+=100%',
            scrub: true,
          },
        });

        const imgElement = item.querySelector(`.${styles.gridItemImg}`);
        if (imgElement) {
          tl.fromTo(
            imgElement,
            {
              scale: 0,
              transformOrigin: `${originX}% 0%`,
            },
            {
              scale: 1,
            }
          );
        }

        const captionElement = item.querySelector(
          `.${styles.gridItemCaptionCustom}`
        );
        if (captionElement) {
          tl.fromTo(
            captionElement,
            {
              xPercent: () => (isLeftSide ? 100 : -100),
              opacity: 0,
            },
            {
              ease: 'power4',
              xPercent: 0,
              opacity: 1,
            },
            0
          );
        }
      });
    };

    initSmoothScrolling();
    scroll();
  }, [isMobile]);

  const renderGridItem = (image, index) => (
    <figure
      key={`projectImage${index}`}
      className={`${styles.gridItem} ${
        image.mobileCaption ? styles.gridItemText : ''
      }`}
      style={
        isMobile
          ? image.mobileCaption?.style ||
            projectsGalleryImageStylesMobile[index]
          : projectsGalleryImageStyles[index]
      }
    >
      {image.src && (
        <div className={styles.gridItemImg}>
          <Image
            src={image.src}
            alt={gridContent.alt}
            fill
            style={{ objectFit: 'cover' }}
            sizes={
              isMobile && index === 6 ? '95vw' : isMobile ? '45vw' : '50vw'
            }
            priority
          />
        </div>
      )}
      {((!isMobile && image.caption) || (isMobile && image.mobileCaption)) && (
        <figcaption
          className={`${styles.gridItemCaptionCustom} ${
            isMobile ? styles.mobileCaption : ''
          }`}
          style={
            !isMobile && image.caption
              ? {
                  left: image.caption.style.left,
                  textAlign: image.caption.style.textAlign,
                }
              : {}
          }
        >
          <p>{isMobile ? image.mobileCaption?.text : image.caption?.text}</p>
        </figcaption>
      )}
    </figure>
  );

  return (
    <div
      className={`${styles.grid} ${
        isMobile ? styles.gridMobile : styles.gridDesktop
      }`}
    >
      {gridContent.images
        .filter((image) => {
          if (!isMobile) {
            return !image.mobileCaption;
          }
          return true;
        })
        .map((image, index) => renderGridItem(image, index))}
      {endingText && (
        <figure
          className={styles.gridItem}
          style={{
            '--r': isMobile
              ? gridContent.images.length + 1
              : gridContent.images.filter((img) => !img.mobileCaption).length +
                1,
            '--c': isMobile ? 1 : 2,
            '--s': isMobile ? 8 : 6,
          }}
        >
          <figcaption
            className={`${styles.gridItemCaptionCustom} ${styles.endingText}`}
          >
            <p>{endingText}</p>
          </figcaption>
        </figure>
      )}
    </div>
  );
}
