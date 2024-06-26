'use client';

import { useEffect, useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navigation = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined')
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
  }, [isDesktop]);

  return isDesktop ? <DesktopMenu /> : <MobileMenu />;
};

export default Navigation;
