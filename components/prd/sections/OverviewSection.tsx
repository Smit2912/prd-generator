import SectionCard from '../shared/SectionCard';

type OverviewSectionProps = {
  overview?: string;
};

export default function OverviewSection({ overview }: OverviewSectionProps) {
  return (
    <SectionCard title='Overview'>
      <p className='leading-7 text-zinc-300'>
        {overview || 'Generating overview...'}
      </p>
    </SectionCard>
  );
}
