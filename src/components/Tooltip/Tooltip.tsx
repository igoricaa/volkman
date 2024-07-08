'use client';

import anime from 'animejs';
import { useRef, useState, useEffect } from 'react';
import styles from './Tooltip.module.scss';

interface Map {
  [key: string]: any;
}

const smaugConfig: Map = {
  in: {
    base: {
      duration: 200,
      easing: 'easeOutQuad',
      rotate: [35, 0],
      opacity: {
        value: 1,
        easing: 'linear',
        duration: 100,
      },
    },
    content: {
      duration: 1000,
      delay: 50,
      easing: 'easeOutElastic',
      translateX: [50, 0],
      rotate: [10, 0],
      opacity: {
        value: 1,
        easing: 'linear',
        duration: 100,
      },
    },
    // trigger: {
    //   translateX: [
    //     { value: '-30%', duration: 130, easing: 'easeInQuad' },
    //     { value: ['30%', '0%'], duration: 900, easing: 'easeOutElastic' },
    //   ],
    //   opacity: [
    //     { value: 0, duration: 130, easing: 'easeInQuad' },
    //     { value: 1, duration: 130, easing: 'easeOutQuad' },
    //   ],
    //   color: [
    //     { value: '#6fbb95', duration: 1, delay: 130, easing: 'easeOutQuad' },
    //   ],
    // },
  },
  out: {
    base: {
      duration: 200,
      delay: 100,
      easing: 'easeInQuad',
      rotate: -35,
      opacity: 0,
    },
    content: {
      duration: 200,
      easing: 'easeInQuad',
      translateX: -30,
      rotate: -10,
      opacity: 0,
    },
    // trigger: {
    //   translateX: [
    //     { value: '-30%', duration: 200, easing: 'easeInQuad' },
    //     { value: ['30%', '0%'], duration: 200, easing: 'easeOutQuad' },
    //   ],
    //   opacity: [
    //     { value: 0, duration: 200, easing: 'easeInQuad' },
    //     { value: 1, duration: 200, easing: 'easeOutQuad' },
    //   ],
    //   color: [
    //     { value: '#666', duration: 1, delay: 200, easing: 'easeOutQuad' },
    //   ],
    // },
  },
};

const Tooltip = ({ children }: { children: React.ReactNode }) => {
  const tooltip = useRef<HTMLDivElement>(null);
  const tooltipTrigger = useRef<HTMLDivElement>(null);
  const tooltipTriggerText = useRef<HTMLSpanElement>(null);
  const tooltipBase = useRef<HTMLDivElement>(null);
  const tooltipContent = useRef<HTMLDivElement>(null);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [mouseTimeout, setMouseTimeout] = useState<NodeJS.Timeout>();
  const [tooltipText, setTooltipText] = useState<string>('Click to copy');

  const mouseEnterFn = () => {
    setMouseTimeout(
      setTimeout(() => {
        setIsShown(true);
        show();
      }, 75)
    );
  };

  const mouseLeaveFn = () => {
    clearTimeout(mouseTimeout);
    if (isShown) {
      setIsShown(false);
    }
    hide();
  };

  const show = () => {
    animate('in');
  };
  const hide = () => {
    animate('out');
    setTimeout(() => setTooltipText('Click to copy'), 250);
  };

  const animate = (dir: string) => {
    if (smaugConfig[dir].base) {
      anime.remove(tooltipBase.current);
      let baseAnimOpts = { targets: tooltipBase.current };
      anime(Object.assign(baseAnimOpts, smaugConfig[dir].base));
    }
    if (smaugConfig[dir].content) {
      anime.remove(tooltipContent.current);
      let contentAnimOpts = { targets: tooltipContent.current };
      anime(Object.assign(contentAnimOpts, smaugConfig[dir].content));
    }
    if (smaugConfig[dir].trigger) {
      anime.remove(tooltipTriggerText.current);
      let triggerAnimOpts = { targets: tooltipTriggerText.current };
      anime(Object.assign(triggerAnimOpts, smaugConfig[dir].trigger));
    }
  };

  const initEvents = () => {
    tooltipTrigger.current?.addEventListener('mouseenter', mouseEnterFn);
    tooltipTrigger.current?.addEventListener('mouseleave', mouseLeaveFn);
    tooltipTrigger.current?.addEventListener('touchstart', mouseEnterFn);
    tooltipTrigger.current?.addEventListener('touchend', mouseLeaveFn);
  };

  useEffect(() => {
    initEvents();

    return () => {
      tooltipTrigger.current?.removeEventListener('mouseenter', mouseEnterFn);
      tooltipTrigger.current?.removeEventListener('mouseleave', mouseLeaveFn);
      tooltipTrigger.current?.removeEventListener('touchstart', mouseEnterFn);
      tooltipTrigger.current?.removeEventListener('touchend', mouseLeaveFn);
    };
  }, []);

  return (
    <div
      ref={tooltip}
      className={[styles.tooltip, styles.tooltipSmaug].join(' ')}
    >
      <div
        ref={tooltipTrigger}
        className={styles.tooltipTrigger}
        role='tooltip'
      >
        <span
          ref={tooltipTriggerText}
          className={styles.tooltipTriggerText}
          onClick={() => setTooltipText('Copied!')}
        >
          {children}
        </span>
      </div>
      <div ref={tooltipBase} className={styles.tooltipBase}>
        <svg
          className={styles.tooltipShape}
          width='100%'
          height='100%'
          viewBox='0 0 400 300'
        >
          <path d='M 314,100 C 313,100 312,100 311,100 L 89.5,100 C 55.9,100 29.1,121 29.1,150 29.1,178 53.1,201 89.5,201 L 184,201 200,223 217,201 311,201 C 344,201 371,178 371,150 371,122 346,99 314,100 Z' />
        </svg>
        <div ref={tooltipContent} className={styles.tooltipContent}>
          {tooltipText}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
