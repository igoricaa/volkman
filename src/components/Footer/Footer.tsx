import Image from 'next/image';
import styles from './Footer.module.scss';
import { socials } from '@/data/data';
import MenuFooter from './MenuFooter';
import TransitionLink from '../PageTransition/TransitionLink/TransitionLink';
import BackToTopButton from '../BackToTopButton';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <BackToTopButton classes={['mobileBackToTopButton']} />
        <TransitionLink href='/'>
          <div className={styles.logoWrapper}>
            <Image
              src='/logos/marija-volkman-logo.svg'
              alt='Marija Volkman'
              sizes='(max-width: 1024px) 148px, 289px'
              fill
            />
          </div>
        </TransitionLink>
      </div>
      <div className={styles.footerBottom}>
        <MenuFooter />
        <div className={styles.contactInfo}>
          <h4>Contact</h4>
          <div className={styles.innerWrapper}>
            <a href='https://maps.app.goo.gl/1pseyMkUPaXeRiX7A' target='_blank'>
              Design Pacific Center,
            </a>
            <a href='https://maps.app.goo.gl/1pseyMkUPaXeRiX7A' target='_blank'>
              750 N San Vicente Blvd,
            </a>
            <a href='https://maps.app.goo.gl/1pseyMkUPaXeRiX7A' target='_blank'>
              Ste 800 West,
            </a>
            <a href='https://maps.app.goo.gl/1pseyMkUPaXeRiX7A' target='_blank'>
              Los Angeles, CA 90069
            </a>
            <a href='tel:0018184581762'>+1 818 458 1762</a>
            <a href='mailto:volkmanm@archicraft.co'>volkmanm@archicraft.co</a>
          </div>
        </div>

        <div className={styles.socialsWrapper}>
          <div className={styles.innerWrapper}>
            <h4>Social</h4>
            <BackToTopButton classes={['desktopBackToTopButton']} />
          </div>
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
