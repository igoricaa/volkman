'use client';

import Image from 'next/image';
import Navigation from './nav/Navigation';
import styles from './Header.module.scss';
import TransitionLink from './PageTransition/TransitionLink/TransitionLink';
import useScrollDirection from '@/utils/useScrollDirection';

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={[
        styles.header,
        scrollDirection && styles[scrollDirection],
      ].join(' ')}
    >
      <TransitionLink href='/'>
        <div className={styles.logoWrapper}>
          <Image
            src='/logos/marija-volkman-logo.svg'
            alt='Marija Volkman'
            style={{ objectFit: 'cover' }}
            fill
            priority
          />
        </div>
      </TransitionLink>

      <Navigation />
    </header>
  );
};

export default Header;
