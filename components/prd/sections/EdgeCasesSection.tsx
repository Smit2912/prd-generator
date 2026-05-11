import Badge from '../shared/Badge';
import SectionCard from '../shared/SectionCard';

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
  return (
    <SectionCard title='Edge Cases'>
      <div className='space-y-4'>
        {edgeCases?.length ? (
          edgeCases.map((edgeCase, index) => (
            <div
              key={index}
              className='rounded-xl border border-zinc-800 p-5 space-y-4'
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
          <p className='text-zinc-500'>Generating edge cases...</p>
        )}
      </div>
    </SectionCard>
  );
}
