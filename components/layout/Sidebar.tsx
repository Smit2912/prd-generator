'use client';

import { useSessions } from '@/hooks/useSessions';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

type SidebarProps = {
  isGenerating?: boolean;
};

export default function Sidebar({ isGenerating }: SidebarProps) {
  const { data: sessions, isLoading, error } = useSessions();

  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className='flex h-screen flex-col'>
      <div className='border-b border-zinc-800 p-6'>
        <h1 className='text-xl font-semibold tracking-tight'>PRD AI</h1>

        <p className='mt-2 text-sm text-zinc-500'>
          AI-powered product requirement generation
        </p>
      </div>

      <div className='flex-1 p-4'>
        <button
          className='w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-black cursor-pointer transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50'
          onClick={() => router.push('/')}
          disabled={isGenerating}
        >
          + New PRD
        </button>

        <div className='mt-8'>
          <p className='mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500'>
            Recent Generations
          </p>

          {isLoading && (
            <div className='rounded-lg border border-zinc-800 p-3 text-sm text-zinc-500'>
              Loading sessions...
            </div>
          )}

          {error && (
            <div className='rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300'>
              Failed to load sessions
            </div>
          )}

          {!isLoading && !error && sessions?.length === 0 && (
            <div className='rounded-lg border border-zinc-800 p-3 text-sm text-zinc-400'>
              No generations yet
            </div>
          )}

          <div className='space-y-2'>
            {sessions?.map((session) => (
              <Link
                key={session.id}
                href={`/prd/${session.id}`}
                className={`block rounded-xl p-3 transition ${isGenerating ? 'pointer-events-none opacity-50' : ''
                  } ${pathname === `/prd/${session.id}`
                    ? 'bg-zinc-900'
                    : 'hover:bg-zinc-900'
                  }`}
              >
                <p className='line-clamp-1 text-sm font-medium text-zinc-200'>
                  {session?.prompt}
                </p>

                {/* <p className='mt-2 text-xs text-zinc-500'>
                  {new Date(session?.created_at).toLocaleDateString()}
                </p> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
