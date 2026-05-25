type PRDStatus = 'idle' | 'generating' | 'saving' | 'saved' | 'error';

type PRDStatusIndicatorProps = {
  status: PRDStatus;
};

const statusConfig = {
  idle: {
    label: 'Ready',
    styles: 'border-zinc-800 bg-zinc-900 text-zinc-400',
  },

  generating: {
    label: 'Generating PRD...',
    styles: 'border-blue-500/20 bg-blue-500/10 text-blue-300',
  },

  saving: {
    label: 'Saving session...',
    styles: 'border-yellow-500/20 bg-yellow-500/10 text-yellow-300',
  },

  saved: {
    label: 'Saved',
    styles: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
  },

  error: {
    label: 'Generation failed',
    styles: 'border-red-500/20 bg-red-500/10 text-red-300',
  },
};

export default function PRDStatusIndicator({
  status,
}: PRDStatusIndicatorProps) {
  const config = statusConfig[status];

  return (
    <div
      className={`
        inline-flex items-center gap-2 rounded-full border
        px-3 py-1.5 text-xs font-medium
        ${config.styles}
      `}
    >
      {status === 'generating' && (
        <div className='h-2 w-2 animate-pulse rounded-full bg-current' />
      )}

      {config.label}
    </div>
  );
}
