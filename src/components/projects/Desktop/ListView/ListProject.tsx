import styles from '../../SingleProject.module.scss';

type Project = {
  index: number;
  title: string;
  category: string;
  setModal: Function;
};

const ListProject = ({ index, title, category, setModal }: Project) => {
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

export default ListProject;
