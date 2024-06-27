import Image from 'next/image';
import styles from './Footer.module.scss';
import { routes, socials } from '@/data/data';
import Link from 'next/link';
import CopyButton from './common/CopyButton/CopyButton';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Link href='/' className={styles.logoWrapper}>
          <Image
            src='/logos/marija-volkman-logo.svg'
            alt='Marija Volkman'
            fill
          />
        </Link>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerMenu}>
          <ul>
            {routes.map((route, index) => {
              return (
                <li key={`footerLink_${index}`}>
                  <Link href={route.href}>{route.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.contactInfo}>
          <h4>Contact</h4>
          <div className={styles.innerWrapper}>
            <a href='https://maps.app.goo.gl/fgnxdamRC3pRDR9h7' target='_blank'>
              700 N San Vicente Blvd,
              <br />
              Los Angeles
            </a>
            <a href='tel:0018184581762'>+1 818 458 1762</a>
            <CopyButton text='volkmanm@archicraft.co' />
          </div>
        </div>

        <div className={styles.socialsWrapper}>
          <h4>Social</h4>
          <ul>
            {socials.map((social, index) => (
              <li key={`socialLink_${index}`}>
                <a href={social.href} target='_blank'>
                  {social.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
