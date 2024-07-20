'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import Lenis from 'lenis';
import styles from './BentoGallery.module.scss';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

const galleryPhotos = [
  {
    src: '/about-me/gallery/masarycka-restaurant.png',
    alt: 'Masarycka Restaurant',
  },
  {
    src: '/about-me/gallery/arden-back-yard.png',
    alt: 'Arden Back Yard',
  },
  {
    src: '/about-me/gallery/marija-volkman-logo.png',
    alt: 'Marija Volkman Logo',
  },
  {
    src: '/about-me/gallery/exterior.png',
    alt: 'Exterior',
  },
  {
    src: '/about-me/gallery/wilshire-cafe-view.png',
    alt: 'Wilshire Cafe View',
  },
  {
    src: '/about-me/gallery/marija-volkman-interior-design-2.png',
    alt: 'Marija Volkman Interior Design 2',
  },
  {
    src: '/about-me/gallery/arden-family-room.png',
    alt: 'Arden Family Room',
  },
  {
    src: '/about-me/gallery/marija-volkman-interior-design.png',
    alt: 'Marija Volkman Interior Design',
  },
];

const BentoGallery = () => {
  gsap.registerPlugin(Flip, ScrollTrigger);

  useGSAP(() => {
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

    initSmoothScrolling();
    scroll();
  }, []);

  return (
    <div className={styles.galleryWrap}>
      <div
        className={[styles.gallery, styles.galleryBento].join(' ')}
        id='gallery-8'
      >
        {galleryPhotos.map((photo, index) => (
          <div className={styles.galleryItem} key={index}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGallery;
