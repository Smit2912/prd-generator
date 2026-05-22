import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';
import CopyButton from '../shared/CopyButton';
import MetricCard from '../cards/MetricCard';
import SectionGrid from '../shared/SectionGrid';

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
    <SectionCard
      title='Success Metrics'
      actions={successMetrics ? <CopyButton text={copyText} /> : null}
    >
      <SectionGrid columns={2}>
        {successMetrics?.length ? (
          successMetrics.map((metric, index) => (
            <MetricCard
              key={index}
              metric={metric?.metric}
              target={metric?.target}
            />
          ))
        ) : (
          <SectionSkeleton />
        )}
      </SectionGrid>
    </SectionCard>
  );
}
