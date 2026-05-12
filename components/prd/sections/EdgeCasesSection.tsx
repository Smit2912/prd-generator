import Badge from '../shared/Badge';
import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';
import CopyButton from '../shared/CopyButton';

type EdgeCasesSectionProps = {
  edgeCases?: (
    | {
        scenario?: string;

        priority?: 'critical' | 'important' | 'minor';

        expectedBehavior?: string;
      }
    | undefined
  )[];
};

export default function EdgeCasesSection({ edgeCases }: EdgeCasesSectionProps) {
  const copyText =
    edgeCases
      ?.map(
        (item) =>
          `Scenario: ${item?.scenario}
Priority: ${item?.priority}

Expected Behaviour:
${item?.expectedBehavior}`
      )
      .join('\n\n-------------------\n\n') ?? '';

  return (
    <SectionCard
      title='Edge Cases'
      actions={edgeCases ? <CopyButton text={copyText} /> : null}
    >
      <div className='space-y-4'>
        {edgeCases?.length ? (
          edgeCases.map((edgeCase, index) => (
            <div
              key={index}
              className='rounded-xl border border-zinc-800 p-5 space-y-4 bg-zinc-900/50'
            >
              <div className='flex items-center justify-between gap-4'>
                <h3 className='font-medium text-white'>
                  {edgeCase?.scenario || 'Generating scenario...'}
                </h3>

                {edgeCase?.priority && (
                  <Badge
                    label={edgeCase?.priority}
                    variant={edgeCase?.priority}
                  />
                )}
              </div>

              <div>
                <p className='text-sm font-medium text-zinc-500 mb-2'>
                  Expected Behavior
                </p>

                <p className='leading-7 text-zinc-300'>
                  {edgeCase?.expectedBehavior || 'Generating behavior...'}
                </p>
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
