'use client';

const CopyButton = () => {
  const copyToClipboard = async (text: any) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <button onClick={() => copyToClipboard('volkmanm@archicraft.co')}>
      volkmanm@archicraft.co
    </button>
  );
};

export default CopyButton;
