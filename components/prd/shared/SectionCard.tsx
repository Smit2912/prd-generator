import { ReactNode } from 'react';

type SectionCardProps = {
  title: string;
  children: ReactNode;
};

export default function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section className='rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 backdrop-blur-sm transition-all duration-300'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-lg font-semibold tracking-tight text-white'>
          {title}
        </h2>

        <div className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse' />
      </div>

      {children}
    </section>
  );
}
