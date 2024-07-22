import ConnectedGrid from '@/components/ConnectedGrid/ConnectedGrid';
import styles from './page.module.scss';
import { Project as ProjectModel, projectsFull } from '@/data/data';
import TransitionLink from '@/components/PageTransition/TransitionLink/TransitionLink';
import Image from 'next/image';

// TODO: add error page
const Project = ({ params }: { params: { slug: string } }) => {
  const getCurrentProjectAndIndex = (
    projects: ProjectModel[],
    slug: string
  ): { project: ProjectModel | null; index: number } => {
    const index = projects.findIndex((project) => project.slug === slug);

    if (index === -1) {
      return { project: null, index: -1 };
    }

    return { project: projects[index], index };
  };

  const { project, index } = getCurrentProjectAndIndex(
    projectsFull,
    params.slug
  );

  const prevProject =
    index === 0
      ? projectsFull[projectsFull.length - 1]
      : projectsFull[index - 1];
  const nextProject =
    index === projectsFull.length - 1
      ? projectsFull[0]
      : projectsFull[index + 1];

  if (project === undefined || project?.title === undefined) {
    return <div>Not found</div>;
  }

  return (
    <main className='main'>
      <div className={styles.pageHeader}>
        <h1>{project.title}</h1>

        {project.archicraftUrl && (
          <a
            href={project.archicraftUrl}
            target='_blank'
            className={styles.archicraftLogo}
          >
            <Image
              src='/logos/archicraft-logo.svg'
              fill
              alt='Archicraft Logo'
              priority
            />
          </a>
        )}
      </div>

      <div className={styles.desktopWrapper}>
        <div className={styles.clientInfoWrapper}>
          <div className={styles.innerWrapper}>
            <p>Client:</p>
            <p>Location</p>
          </div>
          <div className={[styles.innerWrapper, styles.mainInfo].join(' ')}>
            <p>{project.client}</p>
            <p>{project.location}</p>
          </div>
        </div>

        <div
          className={[styles.clientInfoWrapper, styles.clientMainInfo].join(
            ' '
          )}
        >
          <div className={styles.innerWrapper}>
            <p>Realization:</p>
            <p>Share:</p>
          </div>
          <div className={[styles.innerWrapper, styles.mainInfo].join(' ')}>
            <p>{project.year}</p>
            <div className={styles.socialsShareWrapper}>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://volkman.vercel.app/work/${project.slug}`}
                target='_blank'
              >
                FB
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://volkman.vercel.app/work/${project.slug}`}
                target='_blank'
              >
                LN
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobileWrapper}>
        <div className={styles.clientInfoWrapper}>
          <div className={styles.innerWrapper}>
            <p>Client:</p>
            <p>{project.client}</p>
          </div>

          <div className={styles.innerWrapper}>
            <p>Realization:</p>
            <p>{project.year}</p>
          </div>

          <div className={styles.innerWrapper}>
            <p>Location:</p>
            <p>{project.location}</p>
          </div>

          <div className={styles.innerWrapper}>
            <p>Share:</p>
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
      </div>

      <ConnectedGrid gridContent={project.grid} />

      <section className={styles.adjacentProjects}>
        {project && <AdjacentProject type='prev' project={prevProject} />}
        {project && <AdjacentProject type='next' project={nextProject} />}
      </section>
    </main>
  );
};

export default Project;

const AdjacentProject = ({ type, project }: { type: string; project: any }) => {
  const projectUrl = `/work/${project.slug}`;

  return (
    <article className={[styles.adjacentProject, styles[type]].join(' ')}>
      <TransitionLink href={projectUrl}>
        <span>{type} project</span>

        <span className={styles.adjacentPostArrow}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18.593'
            height='33.792'
            viewBox='0 0 18.593 33.792'
          >
            <path
              id='Path_11'
              data-name='Path 11'
              d='M0,0,14.972,14.775,0,29.549'
              transform='translate(2.121 2.121)'
              fill='none'
              stroke='#fff'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='3'
            />
          </svg>
        </span>
        <h3>{project.title}</h3>
      </TransitionLink>
    </article>
  );
};
