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

    const imageHeight = (bodyWidth * 1.32) / (2537 / 1351);

    let numberOfImages = Math.floor(bodyHeight / imageHeight);
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
            objectFit='cover'
            alt='Marija Volkman'
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default BackgroundImage;
