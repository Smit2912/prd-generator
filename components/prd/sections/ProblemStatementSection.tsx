import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';

type ProblemStatementSectionProps = {
  problemStatement?: {
    summary?: string;
    painPoints?: (string | undefined)[];
    businessImpact?: string;
  };
};

export default function ProblemStatementSection({
  problemStatement,
}: ProblemStatementSectionProps) {
  return (
    <SectionCard title='Problem Statement'>
      <div className='space-y-5'>
        <div>
          <h3 className='mb-2 text-sm font-medium text-zinc-500'>Summary</h3>

          <p className='leading-7 text-zinc-300'>
            {problemStatement?.summary ? (
              problemStatement?.summary
            ) : (
              <SectionSkeleton />
            )}
          </p>
        </div>

        <div>
          <h3 className='mb-2 text-sm font-medium text-zinc-500'>
            Pain Points
          </h3>

          <ul className='list-disc space-y-2 pl-5 text-zinc-300'>
            {problemStatement?.painPoints?.length ? (
              problemStatement.painPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))
            ) : (
              <SectionSkeleton />
            )}
          </ul>
        </div>

        <div>
          <h3 className='mb-2 text-sm font-medium text-zinc-500'>
            Business Impact
          </h3>

          <p className='leading-7 text-zinc-300'>
            {problemStatement?.businessImpact ? (
              problemStatement?.businessImpact
            ) : (
              <SectionSkeleton />
            )}
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
