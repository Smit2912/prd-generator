import SectionCard from '../shared/SectionCard';

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
  return (
    <SectionCard title='User Stories'>
      <div className='grid gap-4'>
        {userStories?.length ? (
          userStories?.map((story, index) => (
            <div
              key={index}
              className='rounded-xl border border-zinc-800 bg-zinc-950/50 p-4'
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
          <div className='rounded-xl border border-dashed border-zinc-800 p-4 text-zinc-500'>
            Generating user stories...
          </div>
        )}
      </div>
    </SectionCard>
  );
}
