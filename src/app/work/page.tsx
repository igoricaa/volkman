import Projects from '@/components/projects/Projects';
import styles from './page.module.scss';

const Work = () => {
  return (
    <main className='main'>
      <div className={styles.pageHeader}>
        <h1>Work</h1>
        <div className={styles.previewButtonsWrapper}>
          <button className={[styles.listView].join(' ')}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </button>
          <button className={[styles.gridView].join(' ')}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </button>
        </div>
      </div>
      <Projects />
    </main>
  );
};

export default Work;
