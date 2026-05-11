export default function Sidebar() {
  return (
    <div className='flex h-screen flex-col'>
      <div className='border-b border-zinc-800 p-6'>
        <h1 className='text-xl font-semibold tracking-tight'>PRD AI</h1>

        <p className='mt-2 text-sm text-zinc-500'>
          AI-powered product requirement generation
        </p>
      </div>

      <div className='flex-1 p-4'>
        <button className='w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-zinc-200'>
          + New PRD
        </button>

        <div className='mt-8'>
          <p className='mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500'>
            Recent Generations
          </p>

          <div className='space-y-2'>
            <div className='rounded-lg border border-zinc-800 p-3 text-sm text-zinc-400'>
              No generations yet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
