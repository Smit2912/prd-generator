'use client';

import { experimental_useObject as useObject } from '@ai-sdk/react';
import { PRDSchema } from '@/lib/validations/prd.schema';
import { prdToMarkdown } from '@/lib/export/prd-to-markdown';
import PRDToolbar from './shared/PRDToolbar';

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

type PRDObject = ReturnType<typeof useObject<typeof PRDSchema>>['object'];

type PRDViewerProps = {
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
    data?.userStories?.length ||
    data?.acceptanceCriteria?.length ||
    data?.technicalConsiderations?.length ||
    data?.edgeCases?.length ||
    data?.assumptions?.length ||
    data?.nonFunctionalRequirements?.length ||
    data?.recommendations?.length ||
    data?.outOfScope?.length ||
    data?.successMetrics?.length
  );

  if (!hasAnyData && !isLoading) {
    return null;
  }

  const markdown = prdToMarkdown(data);

  return (
    <div className='space-y-6'>
      <PRDToolbar title={data?.title} markdown={markdown} data={data} />

      <OverviewSection overview={data?.overview} />

      <ProblemStatementSection problemStatement={data?.problemStatement} />

      <UserStoriesSection userStories={data?.userStories} />

      <AcceptanceCriteriaSection
        acceptanceCriteria={data?.acceptanceCriteria}
      />

      <TechnicalConsiderationsSection
        technicalConsiderations={data?.technicalConsiderations}
      />

      <EdgeCasesSection edgeCases={data?.edgeCases} />

      <AssumptionsSection assumptions={data?.assumptions} />

      <NonFunctionalRequirementsSection
        nonFunctionalRequirements={data?.nonFunctionalRequirements}
      />

      <RecommendationsSection recommendations={data?.recommendations} />

      <OutOfScopeSection outOfScope={data?.outOfScope} />

      <SuccessMetricsSection successMetrics={data?.successMetrics} />
    </div>
  );
}
