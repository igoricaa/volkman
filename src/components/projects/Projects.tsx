'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import MobileProjects from './Mobile/MobileProjects';
import DesktopProjects from './Desktop/DesktopProjects';
import { ProjectsView } from '@/data/data';

const Projects = ({ view }: { view?: ProjectsView }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: true });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
    }
  }, [isDesktop]);

  return (
    <div
      ref={projectsRef}
      style={
        view === 'list'
          ? { borderTop: '1px solid #fff' }
          : { borderBottom: 'none' }
      }
    >
      {isInView ? (
        isDesktop ? (
          <DesktopProjects view={view!} />
        ) : (
          <MobileProjects />
        )
      ) : null}
    </div>
  );
};

export default Projects;
