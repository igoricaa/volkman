'use client';

import { useEffect, useState } from 'react';
import styles from './BackToTopButton.module.scss';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobileVar = window.matchMedia('(max-width: 680px)').matches;
      setIsMobile(isMobileVar);

      if (!isMobileVar) {
        window.addEventListener('scroll', toggleVisible);
      }
    }
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, [isMobile]);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1500) {
      setVisible(true);
    } else if (scrolled <= 1500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id='backToTopButton'
      className={[
        styles.backToTopButton,
        visible ? styles.visible : '',
        isMobile ? styles.mobile : '',
      ].join(' ')}
      onClick={scrollToTop}
    >
      Back to top
    </button>
  );
}
