'use client';
import { useState } from 'react';
import styles from './Projects.module.scss';
import Project from './Project';
import ProjectModal from './modal/ProjectModal';
import { projects } from '@/data/data';

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <div className={styles.projects}>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
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

export default Projects;
