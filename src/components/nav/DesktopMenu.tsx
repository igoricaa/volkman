import { routes } from '@/data/data';
import styles from './DesktopMenu.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
            <Link href={route.href}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
