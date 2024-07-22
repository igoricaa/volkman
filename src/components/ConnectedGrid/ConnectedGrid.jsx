'use client';

export * from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import styles from './ConnectedGrid.module.scss';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { projectsGalleryImageStyles } from '@/data/data';
import { useState } from 'react';

export default function ConnectedGrid({ gridContent }) {
  gsap.registerPlugin(ScrollTrigger);
  const [isMobile, setIsMobile] = useState(false);

  useGSAP(() => {
    const gridItems = document.querySelectorAll(`.${styles.gridItem}`);

    if (typeof window !== 'undefined')
      setIsMobile(window.matchMedia('(max-width: 1024px)').matches);

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

        gsap
          .timeline({
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
          })
          .fromTo(
            item.querySelector(`.${styles.gridItemImg}`),
            {
              scale: 0,
              transformOrigin: `${originX}% 0%`,
            },
            {
              scale: 1,
            }
          )
          .fromTo(
            item.querySelector(`.${styles.gridItemImgInner}`),
            {
              scale: 5,
              transformOrigin: `${originX}% 0%`,
            },
            {
              scale: 1,
            },
            0
          )
          .fromTo(
            item.querySelector(`.${styles.gridItemCaptionCustom}`),
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
      });
    };

    initSmoothScrolling();
    scroll();
  });

  return (
    <div className={styles.grid}>
      {Object.keys(gridContent.images).map((key, index) => (
        <figure
          key={`projectImage${index}`}
          className={styles.gridItem}
          style={
            isMobile
              ? { '--r': index + 1, '--c': index % 2 ? 5 : 1, '--s': 4 }
              : projectsGalleryImageStyles[index]
          }
        >
          <div className={styles.gridItemImg}>
            <div className={styles.gridItemImgInner}></div>
            <Image
              src={gridContent.images[key].src}
              alt={gridContent.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes='(max-width: 1024px) 50vw, 50vw'
              priority
            />
          </div>
          {gridContent.images[key].caption && (
            <figcaption
              className={styles.gridItemCaptionCustom}
              style={{
                left: gridContent.images[key].caption.style.left,
                textAlign: gridContent.images[key].caption.style.textAlign,
              }}
            >
              <p>{gridContent.images[key].caption.text}</p>
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
