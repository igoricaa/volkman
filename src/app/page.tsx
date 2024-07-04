import { getImageProps } from 'next/image';
import styles from './page.module.scss';
import Projects from '@/components/projects/Projects';
import ScrollAnimation from '@/components/scrollAnimation/ScrollAnimation';

import AwardsSection from '@/components/awards/AwardsSection';
import Button from '@/components/common/Button/Button';
import ContactSection from '@/components/ContactSection';

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
    src: '/home/marija-volkman-hero.png',
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    src: '/home/marija-volkman-hero-mobile.png',
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

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            tenetur autem nobis, quo fuga voluptatum sit, cum dignissimos saepe
            consequuntur nesciunt.
          </p>
        </div>
      </section>

      <section className={[styles.section, styles.aboutSection].join(' ')}>
        <h4 className={styles.sectiontitle}>About</h4>
        <div className={styles.innerWrapper}>
          <div className={styles.columnWrapper}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              tenetur autem nobis, quo fuga voluptatum sit, cum dignissimos
              saepe consequuntur nesciunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              tenetur autem nobis, quo fuga voluptatum sit, cum dignissimos
              saepe consequuntur nesciunt.
            </p>
          </div>
          <div className={styles.columnWrapper}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              tenetur autem nobis, quo fuga voluptatum sit, cum dignissimos
              saepe consequuntur nesciunt.
            </p>
          </div>
        </div>
        <Button href='/about-me' classes={['roundedButton']}>
          <p>About me</p>
        </Button>
      </section>

      <section className={[styles.section, styles.workSection].join(' ')}>
        <h4 className={styles.sectiontitle}>Recent Work</h4>
        <Projects />
      </section>

      {/* <section>
        <ScrollAnimation />
      </section> */}

      <AwardsSection />

      <section className={styles.section}>
        <ContactSection hasTitle />
      </section>
    </main>
  );
}
