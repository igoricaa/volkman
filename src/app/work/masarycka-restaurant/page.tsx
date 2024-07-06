import ConnectedGrid from '@/components/ConnectedGrid/ConnectedGrid';
import styles from './page.module.scss';

const Project = () => {
  return (
    <main className='main'>
      <div className={styles.pageHeader}>
        <h1>Masarycka Restaurant</h1>
      </div>

      <div className={styles.clientInfoWrapper}>
        <div className={styles.innerWrapper}>
          <p>Client:</p>
          <p>Location</p>
        </div>
        <div className={[styles.innerWrapper, styles.mainInfo].join(' ')}>
          <p>Lagardére Travel Retail</p>
          <p>Prague, Czech Republic</p>
        </div>
      </div>

      <div className={styles.clientInfoWrapper}>
        <div className={styles.innerWrapper}>
          <p>Realization:</p>
          <p>Share:</p>
        </div>
        <div className={[styles.innerWrapper, styles.mainInfo].join(' ')}>
          <p>2021</p>
          <div className={styles.socialsShareWrapper}>
            <a href='https://instagram.com/' target='_blank'>
              IN
            </a>
            <a href='https://facebook.com/' target='_blank'>
              FB
            </a>
            <a href='https://linkedin.com/' target='_blank'>
              LN
            </a>
          </div>
        </div>
      </div>

      <ConnectedGrid />
    </main>
  );
};

export default Project;
