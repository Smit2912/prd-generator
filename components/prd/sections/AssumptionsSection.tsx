import SectionCard from '../shared/SectionCard';

type AssumptionsSectionProps = {
  assumptions?: (
    | {
        assumption?: string;
      }
    | undefined
  )[];
};

export default function AssumptionsSection({
  assumptions,
}: AssumptionsSectionProps) {
  return (
    <SectionCard title='Assumptions'>
      <ul className='list-disc space-y-3 pl-5 text-zinc-300'>
        {assumptions?.length ? (
          assumptions.map((assumption, index) => (
            <li key={index}>{assumption?.assumption || '...'}</li>
          ))
        ) : (
          <li>Generating assumptions...</li>
        )}
      </ul>
    </SectionCard>
  );
}
