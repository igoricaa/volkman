'use client';

import Image from 'next/image';
import styles from './SplashScreen.module.scss';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const SplashScreen = () => {
  const [isSplashScreenVisible, setSplashScreenVisibility] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    handleTranstition();
    setTimeout(() => {
      setSplashScreenVisibility(false);
    }, 3500);
  }, []);

  const paths = {
    step1: {
      unfilled: 'M 0 100 V 100 Q 50 100 100 100 V 100 z',
      inBetween: {
        curve1: 'M 0 100 V 50 Q 50 0 100 50 V 100 z',
        curve2: 'M 0 100 V 50 Q 50 100 100 50 V 100 z',
      },
      filled: 'M 0 100 V 0 Q 50 0 100 0 V 100 z',
    },
    step2: {
      filled: 'M 0 0 V 100 Q 50 100 100 100 V 0 z',
      inBetween: {
        curve1: 'M 0 0 V 50 Q 50 0 100 50 V 0 z',
        curve2: 'M 0 0 V 50 Q 50 100 100 50 V 0 z',
      },
      unfilled: 'M 0 0 V 0 Q 50 0 100 0 V 0 z',
    },
  };

  const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleTranstition = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const overlayPath = document.querySelector('.initial__overlay__path');

    await sleep(3500);

    gsap
      .timeline({
        onComplete: () => setIsAnimating(false),
      })
      .set(overlayPath, {
        attr: { d: paths.step2.filled },
      })
      .to(overlayPath, {
        duration: 0.5,
        ease: 'sine.in',
        attr: { d: paths.step2.inBetween.curve1 },
      })
      .to(overlayPath, {
        duration: 1.1,
        ease: 'power4',
        attr: { d: paths.step2.unfilled },
      });
  };

  return (
    <div
      className={[
        styles.splashScreen,
        isSplashScreenVisible && styles.visible,
      ].join(' ')}
    >
      <svg
        className={styles.overlay}
        width='100%'
        height='100%'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <path
          className={[styles.overlayPath, 'initial__overlay__path'].join(' ')}
          vectorEffect='non-scaling-stroke'
          d='M 0 0 V 100 Q 50 100 100 100 V 0 z'
        />
      </svg>

      <div className={styles.markWrapper}>
        <div className={styles.vWrapper}>
          <Image src='/logos/m-v.svg' alt='Marija Volkman' fill sizes='(max-width: 1024px) 87px, 153px' priority />
        </div>
        <div className={styles.legsWrapper}>
          <Image src='/logos/m-legs.svg' alt='Marija Volkman' fill sizes='(max-width: 1024px) 87px, 153px' priority />
        </div>
      </div>
      <div className={styles.textLogoWrapper}>
        <div className={styles.firstName}>
          <Image
            src='/logos/firstname-logo.svg'
            alt='Marija Volkman'
            fill
            sizes='(max-width: 1024px) 105px, 183px'
            priority
          />
        </div>
        <div className={styles.lastName}>
          <Image
            src='/logos/lastname-logo.svg'
            alt='Marija Volkman'
            fill
            sizes='(max-width: 1024px) 137px, 259px'
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
