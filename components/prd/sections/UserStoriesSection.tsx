import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';
import CopyButton from '../shared/CopyButton';

type UserStoriesSectionProps = {
  userStories?: (
    | {
        actor?: string;
        action?: string;
        benefit?: string;
      }
    | undefined
  )[];
};

export default function UserStoriesSection({
  userStories,
}: UserStoriesSectionProps) {
  const copyText =
    userStories
      ?.map(
        (story) =>
          `As a ${story?.actor}, I want to ${story?.action}, so that ${story?.benefit}`
      )
      .join('\n\n') ?? '';

  return (
    <SectionCard title='User Stories' actions={<CopyButton text={copyText} />}>
      <div className='grid gap-4'>
        {userStories?.length ? (
          userStories?.map((story, index) => (
            <div
              key={index}
              className='rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition hover:border-zinc-700'
            >
              <p className='leading-7 text-zinc-300'>
                <span className='font-medium text-white'>As a</span>{' '}
                {story?.actor || '...'},
                <span className='font-medium text-white'> I want to</span>{' '}
                {story?.action || '...'},
                <span className='font-medium text-white'> so that</span>{' '}
                {story?.benefit || '...'}.
              </p>
            </div>
          ))
        ) : (
          <SectionSkeleton />
        )}
      </div>
    </SectionCard>
  );
}
