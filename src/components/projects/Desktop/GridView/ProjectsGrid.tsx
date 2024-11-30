'use client';

import { projectsFeatured } from '@/data/data';
import styles from './ProjectsGrid.module.scss';
import Image from 'next/image';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';
import TransitionLink from '@/components/PageTransition/TransitionLink/TransitionLink';
import { useGSAP } from '@gsap/react';

const ProjectsGrid = () => {
  const cursorRef = useRef(null);
  const cursorLabelRef = useRef(null);
  const [active, setActive] = useState(false);

  useGSAP(() => {
    const cursor = cursorRef.current;
    const cursorLabel = cursorLabelRef.current;

    if (!cursor || !cursorLabel) return;

    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      [cursor, cursorLabel],
      {
        scale: 0,
        x: '-50%',
        y: '-50%',
      },
      {
        scale: 1,
        duration: 0.4,
        ease: CustomEase.create('custom', '0.76, 0, 0.24, 1'),
      }
    );

    const closeTl = gsap.timeline({ paused: true });
    closeTl.fromTo(
      [cursor, cursorLabel],
      {
        scale: 1,
        x: '-50%',
        y: '-50%',
      },
      {
        scale: 0,
        duration: 0.4,
        ease: CustomEase.create('custom2', '0.32, 0, 0.67, 0'),
      }
    );

    if (active) {
      tl.restart(false);
    } else {
      closeTl.restart(false);
    }
  }, [active]);

  useGSAP(() => {
    const cursor = cursorRef.current;
    const cursorLabel = cursorLabelRef.current;

    if (!cursor || !cursorLabel) return;

    let xMoveCursor = gsap.quickTo(cursor, 'left', {
      duration: 0.5,
      ease: 'power3',
    });

    let yMoveCursor = gsap.quickTo(cursor, 'top', {
      duration: 0.5,
      ease: 'power3',
    });

    let xMoveCursorLabel = gsap.quickTo(cursorLabel, 'left', {
      duration: 0.45,
      ease: 'power3',
    });

    let yMoveCursorLabel = gsap.quickTo(cursorLabel, 'top', {
      duration: 0.45,
      ease: 'power3',
    });

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;

      xMoveCursor(pageX);
      yMoveCursor(pageY);

      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  });

  return (
    <>
      <div className={styles.desktopProjects}>
        {projectsFeatured.map((project, index) => {
          return (
            <article
              key={index}
              className={styles.project}
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <TransitionLink href={`/work/${project.slug}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={`/projects/${project.featuredPhoto}`}
                    alt={project.title}
                    fill
                    sizes='(max-width: 1024px) 95vw, 39vw'
                    style={{ objectFit: 'cover', borderRadius: '1rem' }}
                  />
                </div>
                <div className={styles.infoWrapper}>
                  <h2>{project.title}</h2>
                  <p>{project.category}</p>
                </div>
              </TransitionLink>
            </article>
          );
        })}
      </div>
      <div ref={cursorRef} className={styles.cursor}></div>
      <div ref={cursorLabelRef} className={styles.cursorLabel}>
        View
      </div>
    </>
  );
};

export default ProjectsGrid;
