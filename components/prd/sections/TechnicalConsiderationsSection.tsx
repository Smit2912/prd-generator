import Badge from '../shared/Badge';
import SectionCard from '../shared/SectionCard';

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
  return (
    <SectionCard title='Technical Considerations'>
      <div className='space-y-4'>
        {technicalConsiderations?.length ? (
          technicalConsiderations.map((consideration, index) => (
            <div
              key={index}
              className='rounded-xl border border-zinc-800 bg-zinc-950/40 p-5 space-y-4'
            >
              <div className='flex items-center justify-between'>
                <h3 className='text-sm font-semibold uppercase tracking-wide text-zinc-400'>
                  {consideration?.category || '...'}
                </h3>

                {consideration?.priority && (
                  <Badge
                    label={consideration.priority}
                    variant={consideration.priority}
                  />
                )}
              </div>

              <p className='leading-7 text-zinc-300'>
                {consideration?.detail || 'Generating consideration...'}
              </p>
            </div>
          ))
        ) : (
          <p className='text-zinc-500'>
            Generating technical considerations...
          </p>
        )}
      </div>
    </SectionCard>
  );
}
