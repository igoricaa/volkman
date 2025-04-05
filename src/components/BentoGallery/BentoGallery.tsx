'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
import styles from './BentoGallery.module.scss';
import { desktopImages, mobileImages, restProps } from './imageProps';
import { useRef } from 'react';

gsap.registerPlugin(Flip, ScrollTrigger);

interface FlipSettings {
  flip: {
    absoluteOnLeave: boolean;
    absolute: boolean;
    scale: boolean;
    simple: boolean;
  };
  scrollTrigger: {
    start: string;
    end: string;
  };
  stagger: number;
}

const DEFAULT_FLIP_SETTINGS: FlipSettings = {
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

export function BentoGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!galleryRef.current) return;

    const galleryEl = galleryRef.current;
    const galleryItems = galleryEl.querySelectorAll(`.${styles.galleryItem}`);

    const setupGalleryAnimation = () => {
      galleryEl.classList.add(styles.gallerySwitch);
      const flipstate = Flip.getState(galleryItems, {
        props: 'filter, opacity',
      });
      galleryEl.classList.remove(styles.gallerySwitch);

      return Flip.to(flipstate, {
        ease: 'none',
        ...DEFAULT_FLIP_SETTINGS.flip,
        scrollTrigger: {
          trigger: galleryEl,
          ...DEFAULT_FLIP_SETTINGS.scrollTrigger,
          pin: galleryEl.parentElement as HTMLElement,
          scrub: true,
        },
        stagger: DEFAULT_FLIP_SETTINGS.stagger,
      });
    };

    const animation = setupGalleryAnimation();

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className={styles.galleryWrap}>
      <div
        ref={galleryRef}
        className={`${styles.gallery} ${styles.galleryBento}`}
      >
        {Array.from({ length: 8 }, (_, i) => (
          <BentoItem key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

const BentoItem = ({ index }: { index: number }) => (
  <div
    className={`${styles.galleryItem} ${
      index === 2 ? styles.centralImageWrapper : ''
    }`}
  >
    {index !== 2 && (
      <picture>
        <source media='(min-width: 680px)' srcSet={desktopImages[index]} />
        <source media='(max-width: 680px)' srcSet={mobileImages[index]} />
        <img
          {...restProps[index]}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </picture>
    )}
  </div>
);

export default BentoGallery;
