'use client';

import { ReactNode, useState } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import styles from './TransitionLink.module.scss';
import Link, { LinkProps } from 'next/link';

interface TransitionLinkProps extends LinkProps {
  href: string;
  children: ReactNode;
  style?: React.CSSProperties;
  classes?: string[] | string | undefined;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const TransitionLink = ({
  href,
  children,
  classes,
  style,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: TransitionLinkProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const paths = {
    step1: {
      unfilled: 'M 0 100 V 100 Q 50 100 100 100 V 100 z',
      inBetween: {
        curve1: 'M 0 100 V 50 Q 50 0 100 50 V 100 z',
        curve2: 'M 0 100 V 50 Q 50 100 100 50 V 100 z',
      },
      filled: 'M 0 100 V 0 Q 50 0 100 0 V 100 z',
    },
    step2: {
      filled: 'M 0 0 V 100 Q 50 100 100 100 V 0 z',
      inBetween: {
        curve1: 'M 0 0 V 50 Q 50 0 100 50 V 0 z',
        curve2: 'M 0 0 V 50 Q 50 100 100 50 V 0 z',
      },
      unfilled: 'M 0 0 V 0 Q 50 0 100 0 V 0 z',
    },
  };

  const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleTranstition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (isAnimating) return;
    setIsAnimating(true);

    const overlayPath = document.querySelector('.overlay__path');

    gsap
      .timeline({})
      .set(overlayPath, {
        attr: { d: paths.step1.unfilled },
      })
      .to(
        overlayPath,
        {
          duration: 0.8,
          ease: 'power4.in',
          attr: { d: paths.step1.inBetween.curve1 },
        },
        0
      )
      .to(overlayPath, {
        duration: 0.2,
        ease: 'power1',
        attr: { d: paths.step1.filled },
      });

    await sleep(1000);
    router.push(href);
    await sleep(1000);

    gsap
      .timeline({
        onComplete: () => setIsAnimating(false),
      })
      .set(overlayPath, {
        attr: { d: paths.step2.filled },
      })
      .to(overlayPath, {
        duration: 0.2,
        ease: 'sine.in',
        attr: { d: paths.step2.inBetween.curve1 },
      })
      .to(overlayPath, {
        duration: 1,
        ease: 'power4',
        attr: { d: paths.step2.unfilled },
      });
  };

  return (
    <Link
      href={href}
      onClick={handleTranstition}
      className={
        classes instanceof Array
          ? classes?.map((c: string) => styles[c]).join(' ')
          : styles[classes as string]
      }
      style={style}
      {...rest}
      onMouseEnter={() => onMouseEnter && onMouseEnter()}
      onMouseLeave={() => onMouseLeave && onMouseLeave()}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
