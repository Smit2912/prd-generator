import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';
import RichText from '../shared/RichText';
import CopyButton from '../shared/CopyButton';

type OverviewSectionProps = {
  overview?: string;
};

export default function OverviewSection({ overview }: OverviewSectionProps) {
  return (
    <SectionCard
      title='Overview'
      actions={overview ? <CopyButton text={overview} /> : null}
    >
      <div className='leading-7 text-zinc-300'>
        {overview ? <RichText content={overview} /> : <SectionSkeleton />}
      </div>
    </SectionCard>
  );
}
