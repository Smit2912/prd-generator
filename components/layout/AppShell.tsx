import { ReactNode } from 'react';

type AppShellProps = {
  sidebar: ReactNode;
  children: ReactNode;
};

export default function AppShell({ sidebar, children }: AppShellProps) {
  return (
    <div className='min-h-screen bg-black text-white'>
      {/* <div className='mx-auto flex max-w-[1600px]'> */}
      <div className='mx-auto flex'>
        <aside className='hidden w-[280px] border-r border-zinc-800 lg:block'>
          {sidebar}
        </aside>

        <main className='min-w-0 flex-1'>{children}</main>
      </div>
    </div>
  );
}
