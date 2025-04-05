'use client';

import { useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ConnectedGrid.module.scss';
import { useMediaQuery } from '@/utils/useMediaQuery';
import GridItem from './GridItem';
import { ImageData } from '@/data/data';

gsap.registerPlugin(ScrollTrigger);

interface GridContentData {
  images: ImageData[];
  alt: string;
}

interface ConnectedGridProps {
  gridContent: GridContentData;
  endingText?: string;
}

interface GridItemStyle extends React.CSSProperties {
  '--r': number;
  '--c': number;
  '--s': number;
}

export function ConnectedGrid({ gridContent, endingText }: ConnectedGridProps) {
  const isMobile = useMediaQuery('(max-width: 1023px)');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [gridContent]);

  const filteredImages = useMemo(
    () =>
      gridContent.images.filter((image) => isMobile || !image.mobileCaption),
    [gridContent.images, isMobile]
  );

  const endingTextStyle = useMemo<GridItemStyle>(
    () => ({
      '--r': filteredImages.length + 1,
      '--c': isMobile ? 1 : 2,
      '--s': isMobile ? 8 : 6,
    }),
    [filteredImages.length, isMobile]
  );

  return (
    <div
      className={`${styles.grid} ${
        isMobile ? styles.gridMobile : styles.gridDesktop
      }`}
    >
      {filteredImages.map((image, index) => (
        <GridItem
          key={`projectImage${index}`}
          image={image}
          index={index}
          isMobile={isMobile}
          alt={gridContent.alt}
        />
      ))}
      {endingText && (
        <figure className={styles.gridItem} style={endingTextStyle}>
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

export default ConnectedGrid;
