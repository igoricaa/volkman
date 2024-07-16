import { awards } from '@/data/data';
import styles from './Awards.module.scss';

const Awards = () => {
  return (
    <div className={styles.awards}>
      <div className={styles.gridHeader}>
        <h2 className={styles.sectiontitle}>Awards and Recognition</h2>
        <p className={styles.sectiontitle}>Context</p>
        <p className={styles.sectiontitle}>Year</p>
      </div>

      {awards.map((award, index) => {
        return (
          <article key={`awards_${index}`} className={styles.awardWrapper}>
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
    </div>
  );
};

export default Awards;
