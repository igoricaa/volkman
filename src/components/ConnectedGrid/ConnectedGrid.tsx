'use client';

import { useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ConnectedGrid.module.scss';
import { useMediaQuery } from '@/utils/useMediaQuery';
import GridItem from './GridItem';

gsap.registerPlugin(ScrollTrigger);

interface ImageData {
  src?: string;
  mobileCaption?: {
    style?: any;
    text?: string;
  };
  caption?: {
    style: {
      left: string;
      textAlign: 'left' | 'center' | 'right';
    };
    text: string;
  };
}

interface GridContentData {
  images: ImageData[];
  alt: string;
}

interface ConnectedGridProps {
  gridContent: any;
  endingText?: string;
}

export default function ConnectedGrid({
  gridContent,
  endingText,
}: ConnectedGridProps) {
  const isMobile = useMediaQuery('(max-width: 1023px)');

  const filteredImages = useCallback(
    () =>
      gridContent.images.filter(
        (image: ImageData) => isMobile || !image.mobileCaption
      ),
    [gridContent.images, isMobile]
  );

  return (
    <div
      className={`${styles.grid} ${
        isMobile ? styles.gridMobile : styles.gridDesktop
      }`}
    >
      {filteredImages().map((image: ImageData, index: number) => (
        <GridItem
          key={`projectImage${index}`}
          image={image}
          index={index}
          isMobile={isMobile}
          alt={gridContent.alt}
        />
      ))}
      {endingText && (
        <figure
          className={styles.gridItem}
          style={
            {
              '--r': isMobile
                ? filteredImages().length + 1
                : filteredImages().length + 1,
              '--c': isMobile ? 1 : 2,
              '--s': isMobile ? 8 : 6,
            } as React.CSSProperties
          }
        >
          <figcaption
            className={`${styles.gridItemCaptionCustom} ${styles.endingText}`}
          >
            <p>{endingText}</p>
          </figcaption>
        </figure>
      )}
    </div>
  );
}
