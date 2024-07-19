import { projectsFeatured } from '@/data/data';
import Image from 'next/image';
import styles from './MobileProjects.module.scss';

const MobileProjects = () => {
  return (
    <div className={styles.mobileProjects}>
      {projectsFeatured.map((project, index) => {
        return (
          <article key={`project_${index}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={`/projects/${project.featuredPhoto}`}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </article>
        );
      })}
    </div>
  );
};

export default MobileProjects;
