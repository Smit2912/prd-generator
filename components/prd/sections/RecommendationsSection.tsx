import Badge from '../shared/Badge';
import SectionCard from '../shared/SectionCard';

type RecommendationsSectionProps = {
  recommendations?: (
    | {
        issue?: string;

        explanation?: string;

        suggestedFix?: string;

        severity?: 'low' | 'medium' | 'high';

        relatedSection?: string;
      }
    | undefined
  )[];
};

export default function RecommendationsSection({
  recommendations,
}: RecommendationsSectionProps) {
  return (
    <SectionCard title='AI Recommendations'>
      <div className='space-y-5'>
        {recommendations?.length ? (
          recommendations.map((recommendation, index) => (
            <div
              key={index}
              className='rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5 space-y-5'
            >
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <h3 className='font-semibold text-white'>
                    {recommendation?.issue || '...'}
                  </h3>

                  {recommendation?.relatedSection && (
                    <p className='mt-1 text-xs text-zinc-500'>
                      Related to: {recommendation?.relatedSection}
                    </p>
                  )}
                </div>

                {recommendation?.severity && (
                  <Badge
                    label={recommendation?.severity}
                    variant={recommendation?.severity}
                  />
                )}
              </div>

              <div>
                <p className='mb-2 text-sm font-medium text-zinc-500'>
                  Explanation
                </p>

                <p className='leading-7 text-zinc-300'>
                  {recommendation?.explanation || '...'}
                </p>
              </div>

              <div>
                <p className='mb-2 text-sm font-medium text-zinc-500'>
                  Suggested Fix
                </p>

                <p className='leading-7 text-zinc-300'>
                  {recommendation?.suggestedFix || '...'}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className='text-zinc-500'>Generating recommendations...</p>
        )}
      </div>
    </SectionCard>
  );
}
