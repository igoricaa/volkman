'use client';

import React, {
  useRef,
  useCallback,
  memo,
  ReactNode,
  ButtonHTMLAttributes,
} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Button.module.scss';
import Magnetic from '../Magnetic/Magnetic';
import TransitionLink from '@/components/PageTransition/TransitionLink/TransitionLink';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  classes?: string[];
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  isLink?: boolean;
  isMagnetic?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  classes = [],
  onClick,
  type = 'button',
  isLink = false,
  isMagnetic = true,
}) => {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    timeline.current = gsap
      .timeline({ paused: true })
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

  const manageMouseEnter = useCallback(() => {
    timeline.current?.tweenFromTo('enter', 'exit');
  }, []);

  const manageMouseLeave = useCallback(() => {
    const timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  const buttonClasses = [styles.button, ...classes.map((c) => styles[c])].join(
    ' '
  );

  const buttonProps = {
    className: buttonClasses,
    style: { overflow: 'hidden' } as React.CSSProperties,
    onMouseEnter: manageMouseEnter,
    onMouseLeave: manageMouseLeave,
  };

  const renderCircle = (): JSX.Element => (
    <div ref={circle} className={styles.circle}></div>
  );

  const renderContent = (): JSX.Element => (
    <>
      {children}
      {renderCircle()}
    </>
  );

  const renderButton = (): JSX.Element => {
    if (href) {
      return isLink ? (
        <div {...buttonProps}>
          <TransitionLink href={href} classes='fill'>
            {children}
          </TransitionLink>
          {renderCircle()}
        </div>
      ) : (
        <Link href={href} {...buttonProps}>
          {renderContent()}
        </Link>
      );
    }

    return (
      <button type={type} onClick={onClick} {...buttonProps}>
        {renderContent()}
      </button>
    );
  };

  return isMagnetic ? <Magnetic>{renderButton()}</Magnetic> : renderButton();
};

export default memo(Button);
