'use client';

import { ButtonHTMLAttributes, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Button.module.scss';
import Magnetic from '../Magnetic/Magnetic';
import TransitionLink from '@/components/PageTransition/TransitionLink/TransitionLink';
import Link from 'next/link';

const Button = ({
  children,
  href,
  classes,
  onClick,
  type,
  isLink,
}: {
  children: any;
  href?: string;
  classes?: string[];
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  isLink?: boolean;
}) => {
  const circle = useRef<HTMLDivElement>(null);
  let timeline = useRef(gsap.timeline());
  let timeoutId: any = null;

  useGSAP(() => {
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
  });

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
        isLink ? (
          <div
            className={[
              styles.button,
              classes?.map((c: string) => styles[c]).join(' '),
            ].join(' ')}
            style={{ overflow: 'hidden' }}
            onMouseEnter={() => manageMouseEnter()}
            onMouseLeave={() => manageMouseLeave()}
          >
            <TransitionLink href={href} classes='fill'>
              {children}
            </TransitionLink>
            <div ref={circle} className={styles.circle}></div>
          </div>
        ) : (
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
        )
      ) : (
        <button
          type={type || 'button'}
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
