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
        <div className={styles.tooltipShape}></div>

        <div ref={tooltipContent} className={styles.tooltipContent}>
          {tooltipText}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
