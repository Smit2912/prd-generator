import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';

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
  return (
    <SectionCard title='Success Metrics'>
      <div className='space-y-4'>
        {successMetrics?.length ? (
          successMetrics.map((metric, index) => (
            <div key={index} className='rounded-xl border border-zinc-800 p-4'>
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
