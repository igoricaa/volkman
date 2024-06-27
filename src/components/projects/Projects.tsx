'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.scss';
import Project from './Project';
import ProjectModal from './modal/ProjectModal';
import { projects } from '@/data/data';
import { useInView } from 'framer-motion';
import MobileProjects from './MobileProjects';

const Projects = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
    }
  }, [isDesktop]);

  return (
    <div ref={projectsRef}>
      {isInView ? isDesktop ? <DesktopProjects /> : <MobileProjects /> : null}
    </div>
  );
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
