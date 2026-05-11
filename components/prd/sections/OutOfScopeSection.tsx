import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';

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
          <SectionSkeleton />
        )}
      </ul>
    </SectionCard>
  );
}
