'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import styles from './BentoGallery.module.scss';
import { useGSAP } from '@gsap/react';
import { desktopImages, mobileImages, restProps } from './imageProps';

const BentoGallery = () => {
  gsap.registerPlugin(Flip, ScrollTrigger);

  useGSAP(() => {
    const triggerFlipOnScroll = (galleryEl: any, options: any) => {
      let settings = {
        flip: {
          absoluteOnLeave: false,
          absolute: false,
          scale: false,
          simple: true,
        },
        scrollTrigger: {
          start: 'center center',
          end: '+=300%',
        },
        stagger: 0,
      };

      settings = Object.assign({}, settings, options);

      const galleryItems = galleryEl.querySelectorAll(`.${styles.galleryItem}`);

      galleryEl.classList.add(`${styles.gallerySwitch}`);
      const flipstate = Flip.getState([galleryItems], {
        props: 'filter, opacity',
      });

      galleryEl.classList.remove(`${styles.gallerySwitch}`);

      const tl = Flip.to(flipstate, {
        ease: 'none',
        absoluteOnLeave: settings.flip.absoluteOnLeave,
        absolute: settings.flip.absolute,
        scale: settings.flip.scale,
        simple: settings.flip.simple,
        scrollTrigger: {
          trigger: galleryEl,
          start: settings.scrollTrigger.start,
          end: settings.scrollTrigger.end,
          pin: galleryEl.parentNode,
          scrub: true,
        },
        stagger: settings.stagger,
      });
    };

    const scroll = () => {
      const gallery = document.querySelector('#gallery-8');
      triggerFlipOnScroll(gallery, {});
    };

    scroll();
  }, []);

  return (
    <div className={[styles.galleryWrap, styles.desktop].join(' ')}>
      <div
        className={[styles.gallery, styles.galleryBento].join(' ')}
        id='gallery-8'
      >
        {Array.from({ length: 8 }, (_, i) => i).map((index) => (
          <div
            className={[
              styles.galleryItem,
              index === 2 && styles.centralImageWrapper,
            ].join(' ')}
            key={index}
          >
            {index !== 2 && (
              <picture>
                <source
                  media='(min-width: 680px)'
                  srcSet={desktopImages[index]}
                />
                <source
                  media='(max-width: 680px)'
                  srcSet={mobileImages[index]}
                />
                <img
                  {...restProps[index]}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </picture>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGallery;
