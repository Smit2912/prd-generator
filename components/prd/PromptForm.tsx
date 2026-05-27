import { useRef, useEffect } from 'react';

type PromptFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isLoading: boolean;
  prompt: string;
  setPrompt: (prompt: string) => void;
};

export default function PromptForm({
  onSubmit,
  isLoading,
  prompt,
  setPrompt,
}: PromptFormProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize the textarea to fit content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Reset height to compute scrollHeight
    textarea.style.height = 'auto';
    
    // Set to scrollHeight, constrained by CSS max-h
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [prompt]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Submit on Enter without Shift key
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (prompt.trim() && !isLoading) {
        const form = e.currentTarget.form;
        if (form) {
          const event = new Event('submit', { cancelable: true, bubbles: true });
          form.dispatchEvent(event);
        }
      }
    }
  };

  const hasContent = prompt.trim().length > 0;

  return (
    <div className='fixed bottom-0 left-0 right-0 z-30 lg:left-[280px] bg-gradient-to-t from-black via-black/95 to-transparent pt-12 pb-6 px-4 md:px-8'>
      <div className='mx-auto max-w-3xl'>
        <form onSubmit={onSubmit}>
          <div className='relative flex flex-col rounded-[26px] border border-zinc-800 bg-[#1e1e1f] transition-all focus-within:border-zinc-700'>
            {/* Textarea container */}
            <div className='pl-8 pr-12 pt-3 pb-3'>
              <textarea
                ref={textareaRef}
                name='prompt'
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Ask anything...'
                rows={1}
                className='block w-full resize-none bg-transparent py-1.5 text-base text-zinc-100 outline-none placeholder:text-zinc-500 max-h-[200px] overflow-y-auto min-h-[36px] custom-textarea-scrollbar'
                style={{ height: 'auto' }}
              />
            </div>

            {/* Custom Scrollbar Stylesheet */}
            <style>{`
              .custom-textarea-scrollbar::-webkit-scrollbar {
                width: 8px;
              }
              .custom-textarea-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .custom-textarea-scrollbar::-webkit-scrollbar-thumb {
                background-color: #565859;
                border-radius: 9999px;
                border: 2px solid #1e1e1f; /* Matches the text area background for padding effect */
                background-clip: padding-box;
              }
              .custom-textarea-scrollbar::-webkit-scrollbar-thumb:hover {
                background-color: #707274;
              }
            `}</style>

            {/* Left Action Button (Plus)
            <div className='absolute left-3 bottom-3 flex items-center justify-center'>
              <button
                type='button'
                className='flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-colors cursor-pointer'
                aria-label='Add attachment'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                </svg>
              </button>
            </div> */}

            {/* Right Action Button (Submit) */}
            <div className='absolute right-3 bottom-3 flex items-center justify-center'>
              <button
                type='submit'
                disabled={isLoading || !hasContent}
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-all cursor-pointer ${
                  hasContent && !isLoading
                    ? 'bg-white text-black hover:bg-zinc-200'
                    : 'bg-[#2f2f2f] text-zinc-600 cursor-not-allowed'
                }`}
                aria-label='Send prompt'
              >
                {isLoading ? (
                  <svg className='h-4 w-4 animate-spin' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none' />
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18' />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          <div className='mt-2 text-center'>
            <p className='text-xs text-zinc-500'>
              Structured AI PRD generation powered by Vercel AI SDK
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

