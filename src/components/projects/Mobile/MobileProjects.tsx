import { projectsFeatured } from '@/data/data';
import Image from 'next/image';
import styles from './MobileProjects.module.scss';
import TransitionLink from '@/components/PageTransition/TransitionLink/TransitionLink';

const MobileProjects = ({ isHome }: { isHome: boolean }) => {
  const projects = isHome ? projectsFeatured.slice(0, 5) : projectsFeatured;

  return (
    <div className={styles.mobileProjects}>
      {projects.map((project, index) => {
        return (
          <article key={`project_${index}`}>
            <TransitionLink href={`/work/${project.slug}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={`/projects/${project.featuredPhoto}`}
                  alt={project.title}
                  fill
                  sizes='(max-width: 640px) 640px, 1024px'
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </TransitionLink>
          </article>
        );
      })}
    </div>
  );
};

export default MobileProjects;
