'use client';

import Image from 'next/image';
import styles from './Header.module.scss';
import TransitionLink from './PageTransition/TransitionLink/TransitionLink';
import useScrollDirection from '@/utils/useScrollDirection';
import DesktopMenu from './nav/DesktopMenu';
import MobileMenu from './nav/MobileMenu';

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
            sizes='(max-width: 1024px) 148px, 243px'
            priority
          />
        </div>
      </TransitionLink>

      <DesktopMenu />
      <MobileMenu />
    </header>
  );
};

export default Header;
