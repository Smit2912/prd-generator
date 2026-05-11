import Skeleton from '@/components/ui/Skeleton';

export default function SectionSkeleton() {
  return (
    <div className='space-y-4'>
      <Skeleton className='h-5 w-40' />

      <div className='space-y-3'>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-[92%]' />
        <Skeleton className='h-4 w-[85%]' />
      </div>
    </div>
  );
}
