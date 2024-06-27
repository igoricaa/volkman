import { awards } from '@/data/data';
import styles from './AwardsSection.module.scss';

const AwardsSection = () => {
  return (
    <section className={styles.awardsSection}>
      <div className={styles.gridHeader}>
        <h2 className={styles.sectiontitle}>Awards and Recognition</h2>
        <p className={styles.sectiontitle}>Context</p>
        <p className={styles.sectiontitle}>Year</p>
      </div>

      {awards.map((award, index) => {
        return (
          <article key={`awards_${index}`} className={styles.awardsWrapper}>
            <div>
              <p>{award.title}</p>
            </div>
            <div>
              <p>{award.context}</p>
            </div>
            <div>
              <p>{award.year}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default AwardsSection;
