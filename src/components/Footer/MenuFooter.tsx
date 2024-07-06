'use client';

import { routes } from '@/data/data';
import styles from './MenuFooter.module.scss';
import { usePathname } from 'next/navigation';
import TransitionLink from '../PageTransition/TransitionLink/TransitionLink';

const MenuFooter = () => {
  const pathname = usePathname();

  return (
    <div className={styles.footerMenu}>
      <ul>
        {routes.map((route, index) => {
          return (
            <li
              key={`footerLink_${index}`}
              className={pathname === route.href ? styles.active : ''}
            >
              <TransitionLink href={route.href}>{route.title}</TransitionLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuFooter;
