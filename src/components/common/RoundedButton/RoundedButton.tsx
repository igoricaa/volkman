'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './RoundedButton.module.scss';
import Magnetic from '../Magnetic/Magnetic';
import Link from 'next/link';

const RoundedButton = ({
  children,
  href,
  className,
}: {
  children: any;
  href: string;
  className?: any;
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
      <Link
        href={href}
        className={[styles.roundedButton, styles[className]].join(' ')}
        style={{ overflow: 'hidden' }}
        onMouseEnter={() => manageMouseEnter()}
        onMouseLeave={() => manageMouseLeave()}
      >
        {children}
        <div ref={circle} className={styles.circle}></div>
      </Link>
    </Magnetic>
  );
};

export default RoundedButton;
