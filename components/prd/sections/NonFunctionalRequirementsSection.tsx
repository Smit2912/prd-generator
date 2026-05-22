import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';
import CopyButton from '../shared/CopyButton';
import CategoryPill from '../shared/CategoryPill';

type NonFunctionalRequirementsSectionProps = {
  nonFunctionalRequirements?: (
    | {
        category?:
          | 'availability'
          | 'performance'
          | 'scalability'
          | 'security'
          | 'observability';

        requirement?: string;
      }
    | undefined
  )[];
};

export default function NonFunctionalRequirementsSection({
  nonFunctionalRequirements,
}: NonFunctionalRequirementsSectionProps) {
  const copyText =
    nonFunctionalRequirements
      ?.map(
        (item) =>
          `Category: ${item?.category?.toUpperCase()}

Requirement:
${item?.requirement}`
      )
      .join('\n\n-------------------\n\n') ?? '';

  return (
    <SectionCard
      title='Non Functional Requirements'
      actions={
        nonFunctionalRequirements ? <CopyButton text={copyText} /> : null
      }
    >
      <div className='space-y-4'>
        {nonFunctionalRequirements?.length ? (
          nonFunctionalRequirements.map((requirement, index) => (
            <div
              key={index}
              className='rounded-xl border border-zinc-800 p-4 bg-zinc-900/50 transition hover:border-zinc-700'
            >
              <div className='mb-3'>
                {requirement?.category ? (
                  <CategoryPill category={requirement.category} />
                ) : (
                  <div className='h-6 w-24 rounded-full bg-zinc-800 animate-pulse' />
                )}
              </div>

              <p className='leading-7 text-zinc-300'>
                {requirement?.requirement || '...'}
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
