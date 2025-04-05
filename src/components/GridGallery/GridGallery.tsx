'use client';

import styles from './GridGallery.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { homeGalleryImages } from '@/data/data';
import { useMemo, useRef } from 'react';

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

interface GalleryImage {
  src: string;
  alt?: string;
}

interface GalleryProps {
  images?: GalleryImage[];
  caption?: string;
}

const DEFAULT_FLIP_SETTINGS: FlipSettings = {
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

const IMAGE_SIZES = {
  big: '(max-width: 1024px) 256px, 750px',
  small: '(max-width: 1024px) 30px, 300px',
} as const;

const BIG_IMAGES_INDEX = {
  desktop: [33, 34, 35, 36, 43, 44, 45, 46] as const,
  mobile: [
    3, 4, 5, 6, 13, 14, 15, 16, 23, 24, 25, 26, 33, 34, 35, 36, 43, 44, 45, 46,
    53, 54, 55, 56, 63, 64, 65, 66, 73, 74, 75, 76,
  ] as const,
} as const;

export function GridGallery({
  images = homeGalleryImages,
  caption = 'What is creativity?',
}: GalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  const bigImagesIndex = useMemo(() => {
    const isDesktop =
      typeof window !== 'undefined' &&
      window.matchMedia('(min-width: 1024px)').matches;
    return isDesktop ? BIG_IMAGES_INDEX.desktop : BIG_IMAGES_INDEX.mobile;
  }, []);

  useGSAP(() => {
    if (!galleryRef.current) return;

    const galleryEl = galleryRef.current;
    const galleryCaption = galleryEl.querySelector(`.${styles.caption}`);
    const galleryItems = galleryEl.querySelectorAll(`.${styles.galleryItem}`);

    const setupGalleryAnimation = () => {
      galleryEl.classList.add(styles.gallerySwitch);
      const flipstate = Flip.getState(
        [...Array.from(galleryItems), galleryCaption],
        {
          props: 'filter, opacity',
        }
      );
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
        className={`${styles.gallery} ${styles.galleryGridTiny}`}
        id='gallery-7'
      >
        {images.map((photo, index) => (
          <GalleryItem
            key={index}
            photo={photo}
            isBig={bigImagesIndex.includes(index as any)}
          />
        ))}
        <div className={styles.caption}>{caption}</div>
      </div>
    </div>
  );
}

const GalleryItem = ({
  photo,
  isBig,
}: {
  photo: GalleryImage;
  isBig: boolean;
}) => (
  <div className={styles.galleryItem}>
    <Image
      src={photo.src}
      alt={photo.alt || 'Marija Volkman - Architect'}
      sizes={isBig ? IMAGE_SIZES.big : IMAGE_SIZES.small}
      fill
      style={{ objectFit: 'cover' }}
      quality={isBig ? 85 : 60}
    />
  </div>
);

export default GridGallery;
