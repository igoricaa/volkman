'use client';
import { useEffect, useState } from 'react';
import styles from './Projects.module.scss';
import Project from './Project';
import ProjectModal from './modal/ProjectModal';
import { projects } from '@/data/data';
import Image from 'next/image';

const Projects = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
    }
  }, [isDesktop]);

  return isDesktop ? <DesktopProjects /> : <MobileProjects />;
};

export default Projects;

const DesktopProjects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <div className={styles.projects}>
        {projects.map((project, index) => {
          return (
            <Project
              key={`project_${index}`}
              index={index}
              title={project.title}
              category={project.category}
              setModal={setModal}
            />
          );
        })}
      </div>
      <ProjectModal modal={modal} projects={projects} />
    </>
  );
};

const MobileProjects = () => {
  return (
    <div className={styles.projects}>
      {projects.map((project, index) => {
        return (
          <article key={`project_${index}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={`/projects/${project.src}`}
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
