'use client';

import styles from './ScrollAnimation.module.scss';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import Lenis from 'lenis';

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
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

    // Function to trigger Flip animations when scrolling
    const triggerFlipOnScroll = (galleryEl: any, options: any) => {
      // Default settings for Flip and ScrollTrigger
      let settings = {
        flip: {
          absoluteOnLeave: false,
          absolute: false,
          scale: true,
          simple: true,
          //...
        },
        scrollTrigger: {
          start: 'center center',
          end: '+=300%',
        },
        stagger: 0,
      };

      // Merge default settings with options provided when calling the function
      settings = Object.assign({}, settings, options);

      // Select elements within the gallery that will be animated
      const galleryCaption = galleryEl.querySelector(`.${styles.caption}`);
      const galleryItems = galleryEl.querySelectorAll(`.${styles.galleryItem}`);
    //   const galleryItemsInner = [...galleryItems]
    //     .map((item) => (item.children.length > 0 ? [...item.children] : []))
    //     .flat();

      // Temporarily add the final class to capture the final state
      galleryEl.classList.add(`.${styles.gallerySwitch}`);
      const flipstate = Flip.getState([galleryItems, galleryCaption], {
        props: 'filter, opacity',
      });

      // Remove the final class to revert to the initial state
      galleryEl.classList.remove(`.${styles.gallerySwitch}`);

      // Create the Flip animation timeline
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

      // If there are inner elements in the gallery items, animate them too
    //   if (galleryItemsInner.length) {
    //     tl.fromTo(
    //       galleryItemsInner,
    //       {
    //         scale: 2,
    //       },
    //       {
    //         scale: 1,
    //         scrollTrigger: {
    //           trigger: galleryEl,
    //           start: settings.scrollTrigger.start,
    //           end: settings.scrollTrigger.end,
    //           scrub: true,
    //         },
    //       },
    //       0
    //     );
    //   }
    };

    // Function to apply scroll-triggered animations to various galleries
    // Apply scroll-triggered animations to each gallery with specific settings
    const scroll = () => {
      // Define the gallery IDs and their options
      const galleries = [
        // {
        //   id: '#gallery-1',
        //   options: { flip: { absoluteOnLeave: true, scale: false } },
        // },
        // { id: '#gallery-2' },
        // {
        //   id: '#gallery-3',
        //   options: {
        //     flip: { absolute: true, scale: false },
        //     scrollTrigger: { start: 'center center', end: '+=900%' },
        //     stagger: 0.05,
        //   },
        // },
        // { id: '#gallery-4' },
        // { id: '#gallery-5' },
        // { id: '#gallery-6' },
        { id: '#gallery-7', options: {} },
        // { id: '#gallery-8', options: { flip: { scale: false } } },
        // { id: '#gallery-9' },
      ];

      // Loop through the galleries and apply the scroll-triggered animations
      galleries.forEach((gallery) => {
        const galleryElement = document.querySelector(gallery.id);
        triggerFlipOnScroll(galleryElement, gallery.options);
      });
    };

    // Preload images, initialize smooth scrolling, apply scroll-triggered animations, and remove loading class from body
    // preloadImages('.gallery__item').then(() => {
    initSmoothScrolling();
    scroll();
    document.body.classList.remove('loading');
    // });
  }, []);

  return (
    <main className={styles.main}>
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
    </main>
  );
};

export default ScrollAnimation;
