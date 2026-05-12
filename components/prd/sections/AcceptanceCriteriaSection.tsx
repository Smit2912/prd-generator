import Badge from '../shared/Badge';
import CopyButton from '../shared/CopyButton';
import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';

type AcceptanceCriteriaSectionProps = {
  acceptanceCriteria?: (
    | {
        criterion?: string;
        priority?: 'low' | 'medium' | 'high';
      }
    | undefined
  )[];
};

export default function AcceptanceCriteriaSection({
  acceptanceCriteria,
}: AcceptanceCriteriaSectionProps) {
  const copyText =
    acceptanceCriteria
      ?.map((item) => `${item?.criterion} (Priority: ${item?.priority})`)
      .join('\n\n') ?? '';

  return (
    <SectionCard title='Acceptance Criteria' actions={acceptanceCriteria ? <CopyButton text={copyText} /> : null}>
      <div className='space-y-4'>
        {acceptanceCriteria?.length ? (
          acceptanceCriteria.map((criteria, index) => (
            <div
              key={index}
              className='rounded-xl border border-zinc-800 p-4 space-y-3 bg-zinc-900/50'
            >
              <div className='flex items-center justify-between gap-4'>
                <p className='text-zinc-300 leading-7'>{criteria?.criterion}</p>

                {criteria?.priority && (
                  <Badge
                    label={criteria?.priority}
                    variant={criteria?.priority}
                  />
                )}
              </div>
            </div>
          ))
        ) : (
          <SectionSkeleton />
        )}
      </div>
    </SectionCard>
  );
}
