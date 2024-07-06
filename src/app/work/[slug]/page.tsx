import styles from './page.module.scss';

const Projects = ({ params }: { params: { slug: string } }) => {
  return (
    <main className='main'>
      <div className={styles.pageHeader}>
        <h1>Project Single</h1>
      </div>
    </main>
  );
};

export default Projects;
