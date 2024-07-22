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
import { useState } from 'react';

export default function ConnectedGrid({ gridContent, endingText }) {
  gsap.registerPlugin(ScrollTrigger);
  const [isMobile, setIsMobile] = useState(true);

  useGSAP(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    setIsMobile(!isDesktop);

    const grid = isDesktop
      ? document.querySelector(`.${styles.gridDesktop}`)
      : document.querySelector(`.${styles.gridMobile}`);

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
          );
        // .fromTo(
        //   item.querySelector(`.${styles.gridItemCaptionCustom}`),
        //   {
        //     xPercent: () => (isLeftSide ? 100 : -100),
        //     opacity: 0,
        //   },
        //   {
        //     ease: 'power4',
        //     xPercent: 0,
        //     opacity: 1,
        //   },
        //   0
        // );
      });
    };

    initSmoothScrolling();
    scroll();
  });

  const desktopContent = gridContent.images.filter(
    (image) => !image.mobileCaption
  );

  return (
    <>
      <div className={[styles.grid, styles.gridDesktop].join(' ')}>
        {desktopContent.map((image, index) => (
          <figure
            key={`projectImage${index}`}
            className={styles.gridItem}
            style={
              isMobile
                ? projectsGalleryImageStylesMobile[index]
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
                  sizes='(max-width: 1024px) 50vw, 50vw'
                  priority
                />
              </div>
            )}
            {image.caption && (
              <figcaption
                className={styles.gridItemCaptionCustom}
                style={{
                  left: image.caption.style.left,
                  textAlign: image.caption.style.textAlign,
                }}
              >
                <p>{image.caption.text}</p>
              </figcaption>
            )}
          </figure>
        ))}
        {endingText && (
          <figure
            className={styles.gridItem}
            style={{
              '--r': desktopContent.length + 1,
              '--c': 2,
              '--s': 6,
            }}
          >
            <figcaption
              className={[styles.gridItemCaptionCustom, styles.endingText].join(
                ' '
              )}
            >
              <p>{endingText}</p>
            </figcaption>
          </figure>
        )}
      </div>

      <div className={[styles.grid, styles.gridMobile].join(' ')}>
        {gridContent.images.map((image, index) => (
          <figure
            key={`projectImage${index}`}
            className={[
              styles.gridItem,
              image.mobileCaption ? styles.gridItemText : null,
            ].join(' ')}
            style={
              image.mobileCaption?.style
                ? image.mobileCaption.style
                : projectsGalleryImageStylesMobile[index]
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
                    index === 6
                      ? '(max-width: 1024px) 100vw, 50vw'
                      : '(max-width: 1024px) 45vw, 50vw'
                  }
                  priority
                />
              </div>
            )}
            {image.mobileCaption && (
              <figcaption
                className={[
                  styles.gridItemCaptionCustom,
                  styles.mobileCaption,
                ].join(' ')}
              >
                <p>{image.mobileCaption.text}</p>
              </figcaption>
            )}
          </figure>
        ))}
        {endingText && (
          <figure
            className={styles.gridItem}
            style={{
              '--r': gridContent.images.length + 1,
              '--c': isMobile ? 1 : 2,
              '--s': isMobile ? 8 : 6,
            }}
          >
            <figcaption
              className={[styles.gridItemCaptionCustom, styles.endingText].join(
                ' '
              )}
            >
              <p>{endingText}</p>
            </figcaption>
          </figure>
        )}
      </div>
    </>
  );
}
