import styles from './Project.module.scss';

type Project = {
  index: number;
  title: string;
  category: string;
  setModal: Function;
};

const Project = ({ index, title, category, setModal }: Project) => {
  return (
    <article
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>{category}</p>
    </article>
  );
};

export default Project;
