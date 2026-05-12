import Badge from '../shared/Badge';
import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';
import CopyButton from '../shared/CopyButton';

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
  const copyText =
    recommendations
      ?.map(
        (item) =>
          `Issue: ${item?.issue}
Severity: ${item?.severity}
Related Section: ${item?.relatedSection}

Explanation:
${item?.explanation}

Suggested Fix:
${item?.suggestedFix}`
      )
      .join('\n\n-------------------\n\n') ?? '';

  return (
    <SectionCard
      title='AI Recommendations'
      actions={recommendations ? <CopyButton text={copyText} /> : null}
    >
      <div className='space-y-5'>
        {recommendations?.length ? (
          recommendations.map((recommendation, index) => (
            <div
              key={index}
              className='rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 space-y-5'
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
          <SectionSkeleton />
        )}
      </div>
    </SectionCard>
  );
}
