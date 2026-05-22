import SectionCard from '../shared/SectionCard';
import SectionSkeleton from '../shared/SectionSkeleton';
import CopyButton from '../shared/CopyButton';
import RecommendationCard from '../cards/RecommendationCard';
import SectionGrid from '../shared/SectionGrid';

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
      <SectionGrid columns={1}>
        {recommendations?.length ? (
          recommendations.map((recommendation, index) => (
            <RecommendationCard
              key={index}
              issue={recommendation?.issue}
              explanation={recommendation?.explanation}
              suggestedFix={recommendation?.suggestedFix}
              severity={recommendation?.severity}
              relatedSection={recommendation?.relatedSection}
            />
          ))
        ) : (
          <SectionSkeleton />
        )}
      </SectionGrid>
    </SectionCard>
  );
}
