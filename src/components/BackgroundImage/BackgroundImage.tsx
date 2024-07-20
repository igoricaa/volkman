'use client';

import Image from 'next/image';
import styles from './BackgroundImage.module.scss';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const BackgroundImage = () => {
  const [numberOfImages, setNumberOfImages] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const body = document.querySelector('body');
    const bodyWidth = body!.clientWidth;
    const bodyHeight = body!.clientHeight;

    const isMobile: boolean = window.matchMedia('(max-width: 680px)').matches;
    const coeff: number = isMobile ? 2.17 : 1.32;

    const imageHeight: number = (bodyWidth * coeff) / (2537 / 1351);

    let numberOfImages: number = Math.ceil(bodyHeight / imageHeight);

    if (pathname === '/') numberOfImages++;

    setNumberOfImages(numberOfImages);
  }, [pathname]);

  return (
    <div className={styles.backgroundImageContainer}>
      {Array.from({ length: numberOfImages }).map((_, index) => (
        <div className={styles.backgroundImage} key={index}>
          <Image
            src='/backgroundImg.svg'
            fill
            sizes='100vw'
            style={{ objectFit: 'cover' }}
            alt='Marija Volkman'
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default BackgroundImage;
