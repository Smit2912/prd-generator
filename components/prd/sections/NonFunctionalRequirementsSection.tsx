import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';
import CopyButton from '../shared/CopyButton';

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
              className='rounded-xl border border-zinc-800 p-4 bg-zinc-900/50'
            >
              <p className='mb-2 text-sm font-medium uppercase tracking-wide text-zinc-500'>
                {requirement?.category || '...'}
              </p>

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
