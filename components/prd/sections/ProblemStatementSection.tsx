import SectionCard from '../shared/SectionCard';

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
            {problemStatement?.summary || 'Generating summary...'}
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
              <li>Generating pain points...</li>
            )}
          </ul>
        </div>

        <div>
          <h3 className='mb-2 text-sm font-medium text-zinc-500'>
            Business Impact
          </h3>

          <p className='leading-7 text-zinc-300'>
            {problemStatement?.businessImpact ||
              'Generating business impact...'}
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
