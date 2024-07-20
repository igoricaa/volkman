import TransitionLink from '@/components/PageTransition/TransitionLink/TransitionLink';
import styles from '../../SingleProject.module.scss';

const ListProject = ({
  index,
  title,
  slug,
  category,
  setModal,
}: {
  index: number;
  title: string;
  slug: string;
  category: string;
  setModal: ({ active, index }: { active: boolean; index: number }) => void;
}) => {
  return (
    <TransitionLink href={`/work/${slug}`} classes='projectListLink'>
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
    </TransitionLink>
  );
};

export default ListProject;
