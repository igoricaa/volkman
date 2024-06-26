import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';
import Projects from '@/components/projects/Projects';
import ScrollAnimation from '@/components/scrollAnimation/ScrollAnimation';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.heroBgWrapper}>
          <Image
            src='/home/marija-volkman-hero.png'
            alt='Marija Volkman'
            fill
            sizes='100vw'
            quality={100}
            style={{ objectFit: 'cover' }}
            priority
          />
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
        <h2 className={styles.sectiontitle}>About</h2>
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
            <Link href='about-me'>About me</Link>
          </div>
        </div>
      </section>

      <section className={[styles.section, styles.workSection].join(' ')}>
        <h2 className={styles.sectiontitle}>Recent Work</h2>
        <Projects />
      </section>

      <section>
        <ScrollAnimation />
      </section>
    </main>
  );
}
