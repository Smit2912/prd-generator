import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';

type OverviewSectionProps = {
  overview?: string;
};

export default function OverviewSection({ overview }: OverviewSectionProps) {
  return (
    <SectionCard title='Overview'>
      {overview ? (
        <p className='leading-7 text-zinc-300'>{overview}</p>
      ) : (
        <SectionSkeleton />
      )}
    </SectionCard>
  );
}
