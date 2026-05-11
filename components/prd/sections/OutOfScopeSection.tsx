import SectionCard from '../shared/SectionCard';

type OutOfScopeSectionProps = {
  outOfScope?: (string | undefined)[];
};

export default function OutOfScopeSection({
  outOfScope,
}: OutOfScopeSectionProps) {
  return (
    <SectionCard title='Out Of Scope'>
      <ul className='list-disc space-y-3 pl-5 text-zinc-300'>
        {outOfScope?.length ? (
          outOfScope.map((item, index) => <li key={index}>{item || '...'}</li>)
        ) : (
          <li>Generating out of scope items...</li>
        )}
      </ul>
    </SectionCard>
  );
}
