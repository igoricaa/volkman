'use client';

import styles from './GridGallery.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import Lenis from 'lenis';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { homeGalleryImages } from '@/data/data';
import { useState } from 'react';

const GridGallery = () => {
  gsap.registerPlugin(Flip, ScrollTrigger);
  const [bigImagesIndex, setBigImagesIndex] = useState<number[]>([]);

  const imageSizesBig = `(max-width: 1024px) 25vw, 29vw`;
  const imageSizesSmall = `(max-width: 1024px) 30px, 300px`;
  const bigImagesIndexDesktop = [33, 34, 35, 36, 43, 44, 45, 46];
  const bigImagesIndexMobile = [
    3, 4, 5, 6, 13, 14, 15, 16, 23, 24, 25, 26, 33, 34, 35, 36, 43, 44, 45, 46,
    53, 54, 55, 56, 63, 64, 65, 66, 73, 74, 75, 76,
  ];

  useGSAP(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    setBigImagesIndex(isDesktop ? bigImagesIndexDesktop : bigImagesIndexMobile);

    const initSmoothScrolling = () => {
      let lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
      });

      lenis.on('scroll', () => ScrollTrigger.update());

      const scrollFn = (time: any) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    const triggerFlipOnScroll = (galleryEl: any, options: any) => {
      let settings = {
        flip: {
          absoluteOnLeave: false,
          absolute: false,
          scale: true,
          simple: true,
        },
        scrollTrigger: {
          start: 'center center',
          end: '+=300%',
        },
        stagger: 0,
      };

      settings = Object.assign({}, settings, options);

      const galleryCaption = galleryEl.querySelector(`.${styles.caption}`);
      const galleryItems = galleryEl.querySelectorAll(`.${styles.galleryItem}`);

      galleryEl.classList.add(`${styles.gallerySwitch}`);
      const flipstate = Flip.getState([galleryItems, galleryCaption], {
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
      const gallery = document.querySelector('#gallery-7');
      triggerFlipOnScroll(gallery, {});
    };

    initSmoothScrolling();
    scroll();
  }, []);

  return (
    <div className={styles.galleryWrap}>
      <div
        className={[styles.gallery, styles.galleryGridTiny].join(' ')}
        id='gallery-7'
      >
        {[...homeGalleryImages].map((photo, index) => (
          <div className={styles.galleryItem} key={index}>
            <Image
              src={photo.src}
              alt='Marija Volkman - Architect'
              sizes={
                bigImagesIndex.includes(index) ? imageSizesBig : imageSizesSmall
              }
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
        <div className={styles.caption}>What is creativity?</div>
      </div>
    </div>
  );
};

export default GridGallery;
