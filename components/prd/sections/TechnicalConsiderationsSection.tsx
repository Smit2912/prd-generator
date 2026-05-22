import PriorityBadge from '../shared/PriorityBadge';
import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';
import CopyButton from '../shared/CopyButton';
import CategoryPill from '../shared/CategoryPill';

type TechnicalConsiderationsSectionProps = {
  technicalConsiderations?: (
    | {
        category?:
          | 'architecture'
          | 'security'
          | 'performance'
          | 'integration'
          | 'compliance';

        priority?: 'must-have' | 'important' | 'nice-to-have';

        detail?: string;
      }
    | undefined
  )[];
};

export default function TechnicalConsiderationsSection({
  technicalConsiderations,
}: TechnicalConsiderationsSectionProps) {
  const copyText =
    technicalConsiderations
      ?.map(
        (item) =>
          `Category: ${item?.category?.toUpperCase()}
Priority: ${item?.priority}

${item?.detail}`
      )
      .join('\n\n-------------------\n\n') ?? '';

  return (
    <SectionCard
      title='Technical Considerations'
      actions={technicalConsiderations ? <CopyButton text={copyText} /> : null}
    >
      <div className='space-y-4'>
        {technicalConsiderations?.length ? (
          technicalConsiderations.map((consideration, index) => (
            <div
              key={index}
              className='rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 space-y-4 transition hover:border-zinc-700'
            >
              <div className='flex items-center justify-between'>
                {consideration?.category ? (
                  <CategoryPill category={consideration.category} />
                ) : (
                  <div className='h-6 w-24 rounded-full bg-zinc-800 animate-pulse' />
                )}

                {consideration?.priority && (
                  <PriorityBadge priority={consideration.priority} />
                )}
              </div>

              <p className='leading-7 text-zinc-300'>
                {consideration?.detail || 'Generating consideration...'}
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
