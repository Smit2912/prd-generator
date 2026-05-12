'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

type CopyButtonProps = {
  text: string;
};

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className='text-zinc-400 cursor-pointer transition hover:text-white'
    >
      {copied ? (
        <FontAwesomeIcon icon={faCircleCheck} size='lg' />
      ) : (
        <FontAwesomeIcon icon={faCopy} size='lg' />
      )}
    </button>
  );
}
