type SectionCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section className='rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 space-y-5 shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl font-semibold tracking-tight text-white'>
          {title}
        </h2>
      </div>

      <div className='space-y-4 text-zinc-300'>{children}</div>
    </section>
  );
}
