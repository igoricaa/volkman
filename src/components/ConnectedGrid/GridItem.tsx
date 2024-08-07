'use client';

import { useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import styles from './ConnectedGrid.module.scss';
import {
  projectsGalleryImageStyles,
  projectsGalleryImageStylesMobile,
} from '@/data/data';

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

interface GridItemProps {
  image: ImageData;
  index: number;
  isMobile: boolean;
  alt: string;
}

gsap.registerPlugin(ScrollTrigger);

const GridItem: React.FC<GridItemProps> = ({ image, index, isMobile, alt }) => {
  const figureRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const figure = figureRef.current;
    if (!figure) return;

    const imgElement = figure.querySelector(`.${styles.gridItemImg}`);
    const captionElement = figure.querySelector(
      `.${styles.gridItemCaptionCustom}`
    );

    const previousElementSibling = figure.previousElementSibling as HTMLElement;
    const isLeftSide =
      previousElementSibling &&
      figure.offsetLeft + figure.offsetWidth <=
        previousElementSibling.offsetLeft + 1;
    const originX = isLeftSide ? 100 : 0;

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power4' },
      scrollTrigger: {
        trigger: figure,
        start: 'top bottom-=15%',
        end: '+=100%',
        scrub: true,
      },
    });

    if (imgElement) {
      tl.fromTo(
        imgElement,
        { scale: 0, transformOrigin: `${originX}% 0%` },
        { scale: 1 }
      );
    }

    if (captionElement) {
      tl.fromTo(
        captionElement,
        { xPercent: isLeftSide ? 100 : -100, opacity: 0 },
        { xPercent: 0, opacity: 1 },
        0
      );
    }
  }, []);

  const imageSrc = image.src;
  const imageStyle = isMobile
    ? image.mobileCaption?.style || projectsGalleryImageStylesMobile[index]
    : projectsGalleryImageStyles[index];
  const captionText = isMobile
    ? image.mobileCaption?.text
    : image.caption?.text;
  const captionStyle =
    !isMobile && image.caption
      ? {
          left: image.caption.style.left,
          textAlign: image.caption.style.textAlign,
        }
      : {};

  return (
    <figure
      ref={figureRef}
      className={`${styles.gridItem} ${
        image.mobileCaption ? styles.gridItemText : ''
      }`}
      style={imageStyle}
    >
      {imageSrc && (
        <div className={styles.gridItemImg}>
          <Image
            src={imageSrc}
            alt={alt}
            fill
            style={{ objectFit: 'cover' }}
            sizes={
              isMobile && index === 6 ? '95vw' : isMobile ? '45vw' : '50vw'
            }
            priority
          />
        </div>
      )}
      {captionText && (
        <figcaption
          className={`${styles.gridItemCaptionCustom} ${
            isMobile ? styles.mobileCaption : ''
          }`}
          style={captionStyle}
        >
          <p>{captionText}</p>
        </figcaption>
      )}
    </figure>
  );
};

export default GridItem;
