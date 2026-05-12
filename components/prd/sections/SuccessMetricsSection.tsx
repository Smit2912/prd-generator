import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';
import CopyButton from '../shared/CopyButton';

type SuccessMetricsSectionProps = {
  successMetrics?: (
    | {
        metric?: string;
        target?: string;
      }
    | undefined
  )[];
};

export default function SuccessMetricsSection({
  successMetrics,
}: SuccessMetricsSectionProps) {
  const copyText =
    successMetrics
      ?.map(
        (item) =>
          `Metric: ${item?.metric}
Target: ${item?.target}`
      )
      .join('\n\n') ?? '';

  return (
    <SectionCard title='Success Metrics' actions={successMetrics ? <CopyButton text={copyText} /> : null}>
      <div className='space-y-4'>
        {successMetrics?.length ? (
          successMetrics.map((metric, index) => (
            <div
              key={index}
              className='rounded-xl border border-zinc-800 p-4 bg-zinc-900/50'
            >
              <h3 className='font-medium text-white'>
                {metric?.metric || '...'}
              </h3>

              <p className='mt-2 text-zinc-400'>
                {metric?.target || 'Generating target...'}
              </p>
            </div>
          ))
        ) : (
          <SectionSkeleton />
        )}
      </div>
    </SectionCard>
  );
}
