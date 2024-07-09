import styles from './PageTransition.module.scss';

const PageTransition = () => {
  return (
    <svg
      className={styles.overlay}
      width='100%'
      height='100%'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
    >
      <path
        className={[styles.overlayPath, 'overlay__path'].join(' ')}
        vectorEffect='non-scaling-stroke'
        d='M 0 100 V 100 Q 50 100 100 100 V 100 z'
      />
    </svg>
  );
};

export default PageTransition;
