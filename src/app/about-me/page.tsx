import Button from '@/components/common/Button/Button';
import styles from './page.module.scss';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';
import Awards from '@/components/awards/Awards';
import BentoGallery from '@/components/BentoGallery/BentoGallery';

const AboutMe = () => {
  return (
    <main className={styles.main}>
      <div className={styles.pageHeader}>
        <h1>About me</h1>
      </div>

      <section className={styles.introSection}>
        <p>
          Born and raised in Belgrade, Serbia during scary times of war,
          economic upheaval and political unrest, I quickly learned to be
          creative and adaptable in my approach to life. I also learned to
          appreciate the transformative power of creativity, critical thinking,
          and collaborative problem - solving.
        </p>
        <p>
          In that Old World city, a historical crossroads for both Asian and
          European cultures, I developed a passion for architecture. That took
          me to Prague, Czech Republic, where I was admitted to architecture
          school. After hunkering down to learn the Czech language within
          several months in order to understand what I was being taught, I
          earned my Master's degree and launched my career fresh out of
          university.
        </p>
      </section>

      <section className={styles.middleSection}>
        <div className={styles.imageWrapper}>
          <Image
            src='/about-me/marija-volkman.png'
            alt='Marija Volkman'
            fill
            sizes='(max-width: 640px) 620px, 1000px'
            priority
          />
        </div>
        <div className={styles.textWrapper}>
          <Button
            href='/contact'
            classes={['roundedButton', 'aboutMeButton']}
            isLink
          >
            <p>Get in touch</p>
          </Button>
          <p>
            In 2007 I moved to Los Angeles, arriving in the teeth of a recession
            that put a severe strain on the architectural profession.
            Nevertheless, by leveraging the creativity and collaborative skills
            I bring to my work, I found positions in established and prominent
            architectural studios.
          </p>
          <p>
            After that I reunited with two university colleagues to form a
            cross-national studio. Since then, archicraft has won several
            prestigious awards, and is a trusted and respected partner to many
            clients in both the U.S. and Europe. Uniquely, we bridge continents
            by combining our Central European roots in creativity with American
            pragmatism in execution.
          </p>
        </div>
      </section>

      <section className={styles.animatedSection}>
        <BentoGallery />
      </section>

      <section className={styles.endingSection}>
        <p>
          Beyond my professional endeavors, my passion for creative work extends
          beyond architecture to include a deep appreciation for art in all its
          forms. I find inspiration in the awe-inspiring beauty of our planet
          while traveling, where each new destination enriches my perspective
          and fuels my creativity. Equally, I am deeply moved by the stories of
          individuals I meet along the way. I believe in the power of listening
          and learning from others, recognizing that every person has a unique
          story and valuable lessons to teach.
        </p>
        <p>
          As a mother, raising two daughters has further deepened my empathy and
          appreciation for the diversity of human experience. I strive to
          instill in them a sense of wonder and curiosity about the world,
          encouraging them to find joy in creativity, respect for others, and a
          life long love of learning.{' '}
        </p>
        <p>
          Above all, I find joy in the journey of creation. For me, each is not
          just an opportunity to design functional spaces, but to contribute
          something meaningful to the world. This joy, combined with a deep
          reverence for the planet and an openness to the stories of others,
          forms the foundation of my life's work and passion for architecture.
        </p>
      </section>

      <section className={styles.awardsSection}>
        <Awards />
      </section>

      <div className={styles.contactSection}>
        <ContactSection hasTitle />
      </div>
    </main>
  );
};

export default AboutMe;
