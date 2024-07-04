'use client';

import Projects from '@/components/projects/Projects';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import { ProjectsView } from '@/data/data';
import ContactSection from '@/components/ContactSection';

const Work = () => {
  const [view, setView] = useState<ProjectsView>('list');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
    }
  }, [isDesktop]);

  return (
    <main className='main'>
      <div className={styles.pageHeader}>
        <h1>Work</h1>
        {isDesktop && (
          <div className={styles.previewButtonsWrapper}>
            <button
              className={[
                styles.listView,
                view === 'list' ? styles.active : '',
              ].join(' ')}
              onClick={() => {
                setView('list');
              }}
            >
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </button>
            <button
              className={[
                styles.gridView,
                view === 'grid' ? styles.active : '',
              ].join(' ')}
              onClick={() => {
                setView('grid');
              }}
            >
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </button>
          </div>
        )}
      </div>
      <Projects view={view} />

      <ContactSection />
    </main>
  );
};

export default Work;
