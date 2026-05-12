import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';
import CopyButton from '../shared/CopyButton';

type AssumptionsSectionProps = {
  assumptions?: (
    | {
        assumption?: string;
      }
    | undefined
  )[];
};

export default function AssumptionsSection({
  assumptions,
}: AssumptionsSectionProps) {
  const copyText =
    assumptions?.map((item) => `• ${item?.assumption}`).join('\n') ?? '';

  return (
    <SectionCard title='Assumptions' actions={assumptions ? <CopyButton text={copyText} /> : null}>
      <ul className='list-disc space-y-3 pl-5 text-zinc-300'>
        {assumptions?.length ? (
          assumptions.map((assumption, index) => (
            <li key={index}>{assumption?.assumption || '...'}</li>
          ))
        ) : (
          <SectionSkeleton />
        )}
      </ul>
    </SectionCard>
  );
}
