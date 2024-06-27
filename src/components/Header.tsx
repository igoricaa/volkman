import Image from 'next/image';
import Navigation from './nav/Navigation';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image
          src='/logos/marija-volkman-logo.svg'
          alt='Marija Volkman'
          // width={243}
          // height={44}
          style={{ objectFit: 'cover' }}
          fill
          priority
        />
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
