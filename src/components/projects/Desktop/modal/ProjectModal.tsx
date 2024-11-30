import styles from './ProjectModal.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';
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

const ProjectModal = ({ modal, projects }: ProjectModal) => {
  const modalContainerRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorLabelRef = useRef(null);

  const { active, index } = modal;

  useGSAP(() => {
    const modalContainer = modalContainerRef.current;
    const cursor = cursorRef.current;
    const cursorLabel = cursorLabelRef.current;

    if (!modalContainer || !cursor || !cursorLabel) return;

    const tl = gsap.timeline({ paused: true });
    tl.fromTo(
      [modalContainer, cursor, cursorLabel],
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
      [modalContainer, cursor, cursorLabel],
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
      tl.restart();
    } else {
      closeTl.restart();
    }
  }, [active]);

  useGSAP(() => {
    const modalContainer = modalContainerRef.current;
    const cursor = cursorRef.current;
    const cursorLabel = cursorLabelRef.current;

    if (!modalContainer || !cursor || !cursorLabel) return;

    let xMoveContainer = gsap.quickTo(modalContainer, 'left', {
      duration: 0.8,
      ease: 'power3',
    });

    let yMoveContainer = gsap.quickTo(modalContainer, 'top', {
      duration: 0.8,
      ease: 'power3',
    });

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

      xMoveContainer(pageX);
      yMoveContainer(pageY);

      xMoveCursor(pageX);
      yMoveCursor(pageY);

      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <>
      <div ref={modalContainerRef} className={styles.modalContainer}>
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
      </div>

      <div ref={cursorRef} className={styles.cursor}></div>
      <div ref={cursorLabelRef} className={styles.cursorLabel}>
        <TransitionLink href={`/work/${projects[index].slug}`}>
          View
        </TransitionLink>
      </div>
    </>
  );
};

export default ProjectModal;
