import { ReactNode } from 'react';

type SectionCardProps = {
  title: string;
  children: ReactNode;
  actions?: ReactNode;
};

export default function SectionCard({
  title,
  children,
  actions,
}: SectionCardProps) {
  return (
    <section className='overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 backdrop-blur'>
      <div className='sticky top-0 z-10 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-6 py-4 backdrop-blur'>
        <h2 className='text-lg font-semibold text-white'>{title}</h2>

        {actions}
      </div>

      <div className='space-y-6 p-6'>{children}</div>
    </section>
  );
}
