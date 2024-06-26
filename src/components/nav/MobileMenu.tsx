'use client';
import { routes } from '@/data/data';

import styles from './MobileMenu.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

const MobileMenu = () => {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  //   const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleClickOutside = useCallback(
    (event: any) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current!.contains(event.target) &&
        !burgerRef.current!.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    },
    [menuOpen, menuRef]
  );

  useEffect(() => {
    // setMounted(true);
    if (typeof window !== 'undefined')
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside, isDesktop]);

  return (
    <nav
      className={[styles.mobileMenu, menuOpen ? styles.active : undefined].join(
        ' '
      )}
    >
      <div className={styles.burgerWrapper}>
        <div
          className={styles.burger}
          ref={burgerRef}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
      <div className={styles.modalNavMobile}>
        <div className={styles.modalBlock} ref={menuRef}>
          <div className={styles.modalBlockBackground} />
          <div className={styles.mobileMenuWrapper}>
            <span className={styles.modalSmallTitle}>Menu</span>
            <ul>
              {routes.map((route, index) => (
                <li
                  key={index}
                  className={pathname == route.href ? styles.active : ''}
                >
                  <Link
                    href={route.href}
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.modalNavBackground} />
    </nav>
  );
};

export default MobileMenu;
