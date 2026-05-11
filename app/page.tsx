'use client';

import { experimental_useObject as useObject } from '@ai-sdk/react';
import { PRDSchema } from '@/lib/validations/prd.schema';
import PRDViewer from '@/components/prd/PRDViewer';

export default function HomePage() {
  const { submit, object, isLoading, error } = useObject({
    api: '/api/generate-prd',
    schema: PRDSchema,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    submit({
      prompt: formData.get('prompt'),
    });
  };

  return (
    <main className='min-h-screen bg-black text-white'>
      <div className='mx-auto flex max-w-5xl flex-col gap-8 p-8'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <textarea
            name='prompt'
            className='min-h-[140px] w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-white outline-none transition focus:border-zinc-600'
            placeholder='Describe your feature...'
          />

          <button
            type='submit'
            disabled={isLoading}
            className='rounded-xl bg-white px-5 py-2 font-medium text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50'
          >
            {isLoading ? 'Generating...' : 'Generate PRD'}
          </button>
        </form>

        <PRDViewer data={object} isLoading={isLoading} error={error} />
      </div>
    </main>
  );
}
