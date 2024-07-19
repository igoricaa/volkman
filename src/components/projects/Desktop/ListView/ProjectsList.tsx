'use client';

import { projectsFeatured } from '@/data/data';
import { useState } from 'react';
import ListProject from './ListProject';
import ProjectModal from '../modal/ProjectModal';
import styles from './ProjectsList.module.scss';

const ProjectsList = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <div className={[styles.desktopProjects].join(' ')}>
        {projectsFeatured.map((project, index) => {
          return (
            <ListProject
              key={`project_${index}`}
              index={index}
              title={project.title}
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
