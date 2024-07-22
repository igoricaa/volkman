import { getImageProps } from 'next/image';
import styles from './page.module.scss';
import Projects from '@/components/projects/Projects';
import GridGallery from '@/components/GridGallery/GridGallery';
import Awards from '@/components/awards/Awards';
import Button from '@/components/common/Button/Button';
import ContactSection from '@/components/ContactSection';
import heroDesktop from '@/../public/home/marija-volkman-hero.png';
import heroMobile from '@/../public/home/marija-volkman-hero-mobile.png';

export default function Home() {
  const common = {
    alt: 'Marija Volkman',
    sizes: '100vw',
    fill: true,
    quality: 100,
    priority: true,
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    src: heroDesktop,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: heroMobile,
  });

  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.heroBgWrapper}>
          <picture>
            <source media='(min-width: 680px)' srcSet={desktop} />
            <source media='(max-width: 680px)' srcSet={mobile} />
            <img
              {...rest}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </picture>
        </div>

        <div className={styles.textWrapper}>
          <h1>
            Marija
            <br />
            Volkman
          </h1>

          <p>Architect based in Los Angeles</p>
          <p>European Finesse, American Perseverance:</p>
          <p> Crafting Timeless Architecture.</p>
        </div>
      </section>

      <section className={[styles.section, styles.aboutSection].join(' ')}>
        <h4 className={styles.sectiontitle}>About</h4>
        <div className={styles.innerWrapper}>
          <div className={styles.columnWrapper}>
            <p>
              I find joy in the journey of creation.
              <br />
              For me, each is not just an opportunity to design functional
              spaces, but to contribute something meaningful to the world.
            </p>
            <p>
              This joy, combined with a deep reverence for the planet and an
              openness to the stories of others, forms the foundation of my
              life's work and passion for architecture.
            </p>
          </div>
        </div>
        <Button href='/about-me' classes={['roundedButton']} isLink>
          <p>About me</p>
        </Button>
      </section>

      <section className={[styles.section, styles.workSection].join(' ')}>
        <h4 className={styles.sectiontitle}>Recent Work</h4>
        <Projects isHome />
        <Button href='/work' classes={['viewAllButton']} isLink>
          <p>View All</p>
        </Button>
      </section>

      <section className={styles.gallerySection}>
        <GridGallery />
      </section>

      <section className={styles.awardsSection}>
        <Awards />
      </section>

      <section className={[styles.section, styles.contactSection].join(' ')}>
        <ContactSection hasTitle />
      </section>
    </main>
  );
}
