'use client';

import CopyButton from './CopyButton';

type StickyActionToolbarProps = {
  rawContent?: string;

  onRegenerate?: () => void;
};

export default function StickyActionToolbar({
  rawContent,
  onRegenerate,
}: StickyActionToolbarProps) {
  return (
    <div className='sticky top-4 z-40 mb-6 flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 backdrop-blur-xl'>
      <div>
        <h2 className='text-sm font-semibold text-white'>PRD Workspace</h2>

        <p className='text-xs text-zinc-500'>
          AI-generated product requirements
        </p>
      </div>

      <div className='flex items-center gap-3'>
        {rawContent && <CopyButton text={rawContent} />}

        <button
          onClick={onRegenerate}
          className='rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-800 hover:text-white'
        >
          Regenerate
        </button>
      </div>
    </div>
  );
}
