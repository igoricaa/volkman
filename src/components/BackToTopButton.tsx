'use client';

import Button from './common/Button/Button';

export default function BackToTopButton({ classes }: { classes?: string[] }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      classes={['backToTopButton', ...(classes ?? [])]}
      onClick={scrollToTop}
    >
      <p>Back to top</p>
    </Button>
  );
}
