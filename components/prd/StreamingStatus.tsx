type StreamingStatusProps = {
  isLoading: boolean;
};

export default function StreamingStatus({ isLoading }: StreamingStatusProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <div className='sticky top-0 z-20 mb-6 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 backdrop-blur'>
      <div className='flex items-center gap-3'>
        <div className='h-2 w-2 animate-pulse rounded-full bg-green-400' />

        <p className='text-sm text-zinc-300'>Generating PRD...</p>
      </div>
    </div>
  );
}
