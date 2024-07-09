'use client';

import Image from 'next/image';
import styles from './SplashScreen.module.scss';
import { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [isSplashScreenVisible, setSplashScreenVisibility] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreenVisibility(false);
    }, 3000);
  }, []);

  return (
    <div
      className={[
        styles.splashScreen,
        isSplashScreenVisible && styles.visible,
      ].join(' ')}
    >
      <div className={styles.markWrapper}>
        <div className={styles.vWrapper}>
          <Image src='/logos/m-v.svg' alt='Marija Volkman' fill priority />
        </div>
        <div className={styles.legsWrapper}>
          <Image src='/logos/m-legs.svg' alt='Marija Volkman' fill priority />
        </div>
      </div>
      <div className={styles.textLogoWrapper}>
        <div className={styles.firstName}>
          <Image
            src='/logos/firstname-logo.svg'
            alt='Marija Volkman'
            fill
            priority
          />
        </div>
        <div className={styles.lastName}>
          <Image
            src='/logos/lastname-logo.svg'
            alt='Marija Volkman'
            fill
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
