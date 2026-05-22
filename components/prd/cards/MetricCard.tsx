type MetricCardProps = {
  metric?: string;
  target?: string;
};

export default function MetricCard({ metric, target }: MetricCardProps) {
  return (
    <div className='rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-zinc-700'>
      <div className='space-y-4'>
        <div>
          {/* <p className='text-sm font-medium uppercase tracking-wide text-zinc-500'>
            Metric
          </p> */}

          <h3 className='mt-2 text-lg font-semibold text-white'>
            {metric || 'Generating metric...'}
          </h3>
        </div>

        <div className='rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4'>
          <p className='text-xs font-medium uppercase tracking-wide text-emerald-300'>
            Target
          </p>

          <p className='mt-2 text-sm leading-6 text-emerald-100'>
            {target || 'Generating target...'}
          </p>
        </div>
      </div>
    </div>
  );
}
