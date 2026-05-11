export default function EmptyState() {
  return (
    <div className='flex min-h-[60vh] flex-col items-center justify-center text-center'>
      <div className='max-w-2xl'>
        <h2 className='text-4xl font-bold tracking-tight text-white'>
          Generate structured PRDs with AI
        </h2>

        <p className='mt-6 text-lg leading-8 text-zinc-400'>
          Convert raw product ideas into production-grade requirement documents
          with typed AI streaming powered by Vercel AI SDK.
        </p>

        <div className='mt-10 flex items-center justify-center gap-3 text-sm text-zinc-500'>
          <span>Streaming AI</span>
          <span>•</span>
          <span>Structured Output</span>
          <span>•</span>
          <span>Type-Safe Rendering</span>
        </div>
      </div>
    </div>
  );
}
