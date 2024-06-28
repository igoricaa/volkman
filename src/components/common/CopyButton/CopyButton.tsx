'use client';

import Button from '../Button/Button';
import styles from './CopyButton.module.scss';

const CopyButton = ({
  text,
  classes,
  clean,
}: {
  text: string;
  classes?: string[];
  clean?: boolean;
}) => {
  const copyToClipboard = async (text: any) => {
    navigator.clipboard.writeText(text);
  };

  return clean ? (
    <button onClick={() => copyToClipboard(text)} className={styles.clean}>{text}</button>
  ) : (
    <Button onClick={() => copyToClipboard(text)} classes={classes}>
      <p>{text}</p>
    </Button>
  );
};

export default CopyButton;
