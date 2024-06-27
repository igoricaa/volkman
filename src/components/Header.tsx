import Image from 'next/image';
import Navigation from './nav/Navigation';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logoWrapper}>
        <Image
          src='/logos/marija-volkman-logo.svg'
          alt='Marija Volkman'
          style={{ objectFit: 'cover' }}
          fill
          priority
        />
      </Link>

      <Navigation />
    </header>
  );
};

export default Header;
