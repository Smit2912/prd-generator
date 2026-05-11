type PromptFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;

  isLoading: boolean;
};

export default function PromptForm({ onSubmit, isLoading }: PromptFormProps) {
  return (
    <div className='sticky top-0 z-20 border-b border-zinc-800 bg-black/80 backdrop-blur-xl'>
      <div className='mx-auto max-w-5xl p-6'>
        <form onSubmit={onSubmit}>
          <div className='rounded-2xl border border-zinc-800 bg-zinc-950 p-4'>
            <textarea
              name='prompt'
              placeholder='Describe your feature idea...'
              className='min-h-[120px] w-full resize-none bg-transparent text-zinc-100 outline-none placeholder:text-zinc-500'
            />

            <div className='mt-4 flex items-center justify-between'>
              <p className='text-xs text-zinc-500'>
                Structured AI PRD generation powered by Vercel AI SDK
              </p>

              <button
                type='submit'
                disabled={isLoading}
                className='rounded-xl bg-white px-5 py-2 text-sm font-medium text-black cursor-pointer transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50'
              >
                {isLoading ? 'Generating...' : 'Generate PRD'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
