import { motion } from 'framer-motion';
import styles from './ProjectModal.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import TransitionLink from '@/components/PageTransition/TransitionLink/TransitionLink';
import { useGSAP } from '@gsap/react';

type ProjectModal = {
  modal: {
    active: boolean;
    index: number;
  };
  projects: {
    title: string;
    slug: string;
    featuredPhoto: string;
  }[];
};

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

const ProjectModal = ({ modal, projects }: ProjectModal) => {
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useGSAP(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });

    let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });

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

      xMoveContainer(pageX);
      yMoveContainer(pageY);

      xMoveCursor(pageX);
      yMoveCursor(pageY);

      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  const { active, index } = modal;

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'enter' : 'closed'}
        className={styles.modalContainer}
      >
        <div style={{ top: index * -100 + '%' }} className={styles.modalSlider}>
          {projects.map((project, index) => {
            const { title, featuredPhoto } = project;

            return (
              <div key={`modal_${index}`} className={styles.modal}>
                <Image
                  src={`/projects/${featuredPhoto}`}
                  width={582}
                  height={431}
                  style={{ objectFit: 'cover' }}
                  alt={title}
                />
              </div>
            );
          })}
        </div>
      </motion.div>

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
        <TransitionLink href={`/work/${projects[index].slug}`}>
          View
        </TransitionLink>
      </motion.div>
    </>
  );
};

export default ProjectModal;
