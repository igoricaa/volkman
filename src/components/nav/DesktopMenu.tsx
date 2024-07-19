'use client';

import { routes } from '@/data/data';
import styles from './DesktopMenu.module.scss';
import { usePathname } from 'next/navigation';
import TransitionLink from '../PageTransition/TransitionLink/TransitionLink';

const DesktopMenu = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.menuDesktop}>
      <ul>
        {routes.map((route, index) => (
          <li
            key={index}
            className={[
              pathname === route.href ? styles.active : '',
              route.href === '/contact' ? styles.contact : '',
            ].join(' ')}
          >
            <TransitionLink href={route.href}>{route.title}</TransitionLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
