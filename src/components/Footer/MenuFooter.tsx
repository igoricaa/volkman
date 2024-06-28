'use client';

import { routes } from '@/data/data';
import styles from './MenuFooter.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
              <Link href={route.href}>{route.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuFooter;
