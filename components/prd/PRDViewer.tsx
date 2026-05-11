// import { PRDData } from '@/types/prd';
import { experimental_useObject as useObject } from '@ai-sdk/react';
import { PRDSchema } from '@/lib/validations/prd.schema';

import OverviewSection from './sections/OverviewSection';
import ProblemStatementSection from './sections/ProblemStatementSection';
import UserStoriesSection from './sections/UserStoriesSection';
import AcceptanceCriteriaSection from './sections/AcceptanceCriteriaSection';
import TechnicalConsiderationsSection from './sections/TechnicalConsiderationsSection';
import EdgeCasesSection from './sections/EdgeCasesSection';
import AssumptionsSection from './sections/AssumptionsSection';
import NonFunctionalRequirementsSection from './sections/NonFunctionalRequirementsSection';
import RecommendationsSection from './sections/RecommendationsSection';
import OutOfScopeSection from './sections/OutOfScopeSection';
import SuccessMetricsSection from './sections/SuccessMetricsSection';

type PRDObject = ReturnType<
  typeof useObject<typeof PRDSchema>
>['object'];

type PRDViewerProps = {
  // data?: PRDData;
  data?: PRDObject;
  isLoading: boolean;
  error?: Error;
};

export default function PRDViewer({ data, isLoading, error }: PRDViewerProps) {
  if (error) {
    return (
      <div className='rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300'>
        {error.message}
      </div>
    );
  }

  const hasAnyData = !!(
    data?.title ||
    data?.overview ||
    data?.problemStatement ||
    data?.userStories?.length
  );

  if (!hasAnyData && !isLoading) {
    return null;
  }

  return (
    <div className='space-y-6'>
      <OverviewSection overview={data?.overview} />

      <ProblemStatementSection
        problemStatement={data?.problemStatement}
      />

      <UserStoriesSection
        userStories={data?.userStories}
      />

      <AcceptanceCriteriaSection
        acceptanceCriteria={data?.acceptanceCriteria}
      />

      <TechnicalConsiderationsSection
        technicalConsiderations={
          data?.technicalConsiderations
        }
      />

      <EdgeCasesSection
        edgeCases={data?.edgeCases}
      />

      <AssumptionsSection
        assumptions={data?.assumptions}
      />

      <NonFunctionalRequirementsSection
        nonFunctionalRequirements={
          data?.nonFunctionalRequirements
        }
      />

      <RecommendationsSection
        recommendations={data?.recommendations}
      />

      <OutOfScopeSection
        outOfScope={data?.outOfScope}
      />

      <SuccessMetricsSection
        successMetrics={data?.successMetrics}
      />
    </div>
  );
}
