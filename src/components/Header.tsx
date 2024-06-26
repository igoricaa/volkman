import Image from 'next/image';
import Navigation from './nav/Navigation';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src='/logos/marija-volkman-logo.svg'
        alt='Marija Volkman'
        width={243}
        height={44}
        priority
      />

      <Navigation />
    </header>
  );
};

export default Header;
