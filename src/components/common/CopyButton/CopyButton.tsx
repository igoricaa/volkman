'use client';

const CopyButton = ({ text }: { text: string }) => {
  const copyToClipboard = async (text: any) => {
    navigator.clipboard.writeText(text);
  };

  return <button onClick={() => copyToClipboard(text)}>{text}</button>;
};

export default CopyButton;
