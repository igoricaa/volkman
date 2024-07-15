'use client';

import Button from './common/Button/Button';

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button classes={['backToTopButton']} onClick={scrollToTop}>
      <p>Back to top</p>
    </Button>
  );
}
