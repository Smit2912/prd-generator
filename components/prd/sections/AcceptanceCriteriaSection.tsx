import Badge from '../shared/Badge';
import SectionCard from '../shared/SectionCard';

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
  return (
    <SectionCard title='Acceptance Criteria'>
      <div className='space-y-4'>
        {acceptanceCriteria?.length ? (
          acceptanceCriteria.map((criteria, index) => (
            <div
              key={index}
              className='rounded-xl border border-zinc-800 p-4 space-y-3'
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
          <p className='text-zinc-500'>Generating acceptance criteria...</p>
        )}
      </div>
    </SectionCard>
  );
}
