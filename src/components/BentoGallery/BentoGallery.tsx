'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import Lenis from 'lenis';
import styles from './BentoGallery.module.scss';
import { useGSAP } from '@gsap/react';

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
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(about-me/gallery/masarycka-restaurant.png)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(about-me/gallery/arden-back-yard.png)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(about-me/gallery/marija-volkman-logo.png)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(about-me/gallery/exterior.png)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(about-me/gallery/wilshire-cafe-view.png)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(about-me/gallery/marija-volkman-interior-design-2.png)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(about-me/gallery/arden-family-room.png)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(about-me/gallery/marija-volkman-interior-design.png)' }}
        ></div>
        <div className={styles.caption}>Perfect Imperfections</div>
      </div>
    </div>
  );
};

export default BentoGallery;
