'use client';

import styles from './ScrollAnimation.module.scss';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import Lenis from 'lenis';

const ScrollAnimation = () => {
  gsap.registerPlugin(Flip, ScrollTrigger);

  useEffect(() => {
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
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/51.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/52.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/53.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/54.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/55.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/56.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/57.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/58.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/59.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/60.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/61.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/51.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/52.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/53.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/54.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/55.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/56.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/57.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/58.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/59.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/60.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/61.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/51.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/52.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/53.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/54.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/55.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/56.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/57.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/58.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/59.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/60.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/61.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/51.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/52.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/53.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/54.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/55.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/56.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/57.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/58.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/59.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/60.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/61.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/51.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/52.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/53.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/54.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/55.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/56.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/57.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/58.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/59.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/60.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/61.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/51.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/52.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/53.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/54.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/55.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/56.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/57.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/58.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/59.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/60.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/61.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/51.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/52.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/53.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/54.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/55.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/56.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/57.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/58.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/59.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/60.jpg)' }}
        ></div>
        <div
          className={styles.galleryItem}
          style={{ backgroundImage: 'url(home/animation/61.jpg)' }}
        ></div>
        <div className={styles.caption}>What is creativity?</div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
