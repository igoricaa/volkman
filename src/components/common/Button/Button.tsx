'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Button.module.scss';
import Magnetic from '../Magnetic/Magnetic';
import Link from 'next/link';

const Button = ({
  children,
  href,
  classes,
  onClick,
}: {
  children: any;
  href?: string;
  classes?: string[];
  onClick?: () => void;
}) => {
  const circle = useRef<HTMLDivElement>(null);
  let timeline = useRef(gsap.timeline());
  let timeoutId: any = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' },
        'enter'
      )
      .to(
        circle.current,
        { top: '-150%', width: '125%', duration: 0.25 },
        'exit'
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeline.current.tweenFromTo('enter', 'exit');
  };
  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      {href ? (
        <Link
          href={href}
          className={[
            styles.button,
            classes?.map((c: string) => styles[c]).join(' '),
          ].join(' ')}
          style={{ overflow: 'hidden' }}
          onMouseEnter={() => manageMouseEnter()}
          onMouseLeave={() => manageMouseLeave()}
        >
          {children}
          <div ref={circle} className={styles.circle}></div>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={[
            styles.button,
            classes?.map((c: string) => styles[c]).join(' '),
          ].join(' ')}
          style={{ overflow: 'hidden' }}
          onMouseEnter={() => manageMouseEnter()}
          onMouseLeave={() => manageMouseLeave()}
        >
          {children}
          <div ref={circle} className={styles.circle}></div>
        </button>
      )}
    </Magnetic>
  );
};

export default Button;
