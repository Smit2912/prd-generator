import SeverityBadge from '../shared/SeverityBadge';
import RichText from '../shared/RichText';

type RecommendationCardProps = {
  issue?: string;

  explanation?: string;

  suggestedFix?: string;

  severity?: 'low' | 'medium' | 'high';

  relatedSection?: string;
};

export default function RecommendationCard({
  issue,
  explanation,
  suggestedFix,
  severity,
  relatedSection,
}: RecommendationCardProps) {
  return (
    <div className='rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition hover:border-zinc-700'>
      <div className='flex items-start justify-between gap-4'>
        <div className='space-y-2'>
          <h3 className='text-base font-semibold text-white'>
            {issue || 'Generating issue...'}
          </h3>

          {relatedSection && (
            <p className='text-xs text-zinc-500'>
              Related to: {relatedSection}
            </p>
          )}
        </div>

        {severity && <SeverityBadge severity={severity} />}
      </div>

      <div className='mt-6 space-y-5'>
        <div>
          <p className='mb-2 text-sm font-medium text-zinc-500'>Explanation</p>

          {explanation ? (
            <RichText content={explanation} />
          ) : (
            <p className='text-zinc-500'>Generating explanation...</p>
          )}
        </div>

        <div>
          <p className='mb-2 text-sm font-medium text-zinc-500'>
            Suggested Fix
          </p>

          {suggestedFix ? (
            <RichText content={suggestedFix} />
          ) : (
            <p className='text-zinc-500'>Generating suggested fix...</p>
          )}
        </div>
      </div>
    </div>
  );
}
