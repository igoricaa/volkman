import { useMemo } from 'react';
import Image from 'next/image';
import ConnectedGrid from '@/components/ConnectedGrid/ConnectedGrid';
import TransitionLink from '@/components/PageTransition/TransitionLink/TransitionLink';
import { Project as ProjectModel, projectsFull } from '@/data/data';
import styles from './page.module.scss';

export async function generateStaticParams() {
  return projectsFull.map((project) => ({
    slug: project.slug,
  }));
}

const Project = ({ params }: { params: { slug: string } }) => {
  const { project, prevProject, nextProject } = useMemo(() => {
    const index = projectsFull.findIndex((p) => p.slug === params.slug);
    if (index === -1)
      return { project: null, prevProject: null, nextProject: null };

    const project = projectsFull[index];
    const prevProject =
      index === 0
        ? projectsFull[projectsFull.length - 1]
        : projectsFull[index - 1];
    const nextProject =
      index === projectsFull.length - 1
        ? projectsFull[0]
        : projectsFull[index + 1];

    return { project, prevProject, nextProject };
  }, [params.slug]);

  if (!project) {
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
            rel='noopener noreferrer'
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

      <DesktopProjectInfo project={project} />
      <MobileProjectInfo project={project} />

      <ConnectedGrid
        gridContent={project.grid}
        endingText={project.endingText}
      />

      <section className={styles.adjacentProjects}>
        <AdjacentProject type='prev' project={prevProject} />
        <AdjacentProject type='next' project={nextProject} />
      </section>
    </main>
  );
};

export default Project;

const DesktopProjectInfo = ({ project }: { project: ProjectModel }) => (
  <div className={styles.desktopWrapper}>
    <div className={styles.clientInfoWrapper}>
      <div className={styles.innerWrapper}>
        <div>Client:</div>
        <div>Location:</div>
      </div>
      <div className={`${styles.innerWrapper} ${styles.mainInfo}`}>
        <div>{project.client}</div>
        <div>{project.location}</div>
      </div>
    </div>
    <div className={`${styles.clientInfoWrapper} ${styles.clientMainInfo}`}>
      <div className={styles.innerWrapper}>
        <div>Realization:</div>
        <div>Share:</div>
      </div>
      <div className={`${styles.innerWrapper} ${styles.mainInfo}`}>
        <div>{project.year}</div>
        <SocialLinks />
      </div>
    </div>
  </div>
);

const MobileProjectInfo = ({ project }: { project: ProjectModel }) => (
  <div className={styles.mobileWrapper}>
    <div className={styles.clientInfoWrapper}>
      <InfoRow label='Client' value={project.client} />
      <InfoRow label='Realization' value={project.year} />
      <InfoRow label='Location' value={project.location} />
      <InfoRow label='Share' value={<SocialLinks />} />
    </div>
  </div>
);

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div className={styles.innerWrapper}>
    <div>{label}:</div>
    <div>{value}</div>
  </div>
);

const SocialLinks = () => (
  <div className={styles.socialsShareWrapper}>
    <a href='https://facebook.com/' target='_blank' rel='noopener noreferrer'>
      FB
    </a>
    <a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer'>
      LN
    </a>
  </div>
);

const AdjacentProject = ({
  type,
  project,
}: {
  type: 'prev' | 'next';
  project: ProjectModel;
}) => (
  <article className={`${styles.adjacentProject} ${styles[type]}`}>
    <TransitionLink href={`/work/${project.slug}`}>
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
