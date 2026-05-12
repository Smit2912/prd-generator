import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';
import CopyButton from '../shared/CopyButton';

type OutOfScopeSectionProps = {
  outOfScope?: (string | undefined)[];
};

export default function OutOfScopeSection({
  outOfScope,
}: OutOfScopeSectionProps) {

  const copyText =
    outOfScope?.map((item) => `• ${item}`).join('\n') ?? '';

  return (
    <SectionCard title='Out Of Scope' actions={outOfScope ? <CopyButton text={copyText} /> : null}>
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
