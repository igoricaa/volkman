'use client';

import { projects } from '@/data/data';
import styles from './ProjectsGrid.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import TransitionLink from '@/components/PageTransition/TransitionLink/TransitionLink';
import { useGSAP } from '@gsap/react';

const ProjectsGrid = () => {
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const [active, setActive] = useState(false);

  const scaleAnimation = {
    initial: { scale: 0, x: '-50%', y: '-50%' },
    enter: {
      scale: 1,
      x: '-50%',
      y: '-50%',
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: '-50%',
      y: '-50%',
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  useGSAP(() => {
    let xMoveCursor = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });

    let yMoveCursor = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });

    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });

    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, 'top', {
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
        {projects.map((project, index) => {
          return (
            <article
              key={index}
              className={styles.project}
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <TransitionLink href={`/projects/${project.slug}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={`/projects/${project.src}`}
                    alt={project.title}
                    fill
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
      <motion.div
        ref={cursor}
        className={styles.cursor}
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className={styles.cursorLabel}
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
      >
        View
      </motion.div>
    </>
  );
};

export default ProjectsGrid;
