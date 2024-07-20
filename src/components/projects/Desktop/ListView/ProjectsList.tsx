'use client';

import { projectsFeatured } from '@/data/data';
import { useState } from 'react';
import ListProject from './ListProject';
import ProjectModal from '../modal/ProjectModal';
import styles from './ProjectsList.module.scss';

const ProjectsList = ({ isHome }: { isHome: boolean }) => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const projects = isHome ? projectsFeatured.slice(0, 5) : projectsFeatured;

  return (
    <>
      <div className={[styles.desktopProjects].join(' ')}>
        {projects.map((project, index) => {
          return (
            <ListProject
              key={`project_${index}`}
              index={index}
              title={project.title}
              slug={project.slug}
              category={project.category}
              setModal={setModal}
            />
          );
        })}
      </div>
      <ProjectModal modal={modal} projects={projectsFeatured} />
    </>
  );
};

export default ProjectsList;
