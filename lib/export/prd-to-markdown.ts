type PRDData = any;

export function prdToMarkdown(data: PRDData): string {
  if (!data) return '';

  let md = '';

  if (data.title) {
    md += `# ${data.title}\n\n`;
  }

  if (data.overview) {
    md += `## Overview\n\n${data.overview}\n\n`;
  }

  if (data.problemStatement) {
    md += `## Problem Statement\n\n`;

    if (data.problemStatement.summary) {
      md += `### Summary\n${data.problemStatement.summary}\n\n`;
    }

    if (data.problemStatement.painPoints?.length) {
      md += `### Pain Points\n`;

      data.problemStatement.painPoints.forEach((point: string) => {
        md += `- ${point}\n`;
      });

      md += '\n';
    }

    if (data.problemStatement.businessImpact) {
      md += `### Business Impact\n${data.problemStatement.businessImpact}\n\n`;
    }
  }

  if (data.userStories?.length) {
    md += `## User Stories\n\n`;

    data.userStories.forEach((story: any) => {
      md += `- As a ${story.actor}, I want to ${story.action}, so that ${story.benefit}\n`;
    });

    md += '\n';
  }

  if (data.acceptanceCriteria?.length) {
    md += `## Acceptance Criteria\n\n`;

    data.acceptanceCriteria.forEach((item: any) => {
      md += `- [${item.priority?.toUpperCase()}] ${item.criterion}\n`;
    });

    md += '\n';
  }

  if (data.technicalConsiderations?.length) {
    md += `## Technical Considerations\n\n`;

    data.technicalConsiderations.forEach((item: any) => {
      md += `### ${item.category} (${item.priority})\n`;
      md += `${item.detail}\n\n`;
    });
  }

  if (data.edgeCases?.length) {
    md += `## Edge Cases\n\n`;

    data.edgeCases.forEach((item: any) => {
      md += `### ${item.scenario}\n`;
      md += `Priority: ${item.priority}\n\n`;
      md += `${item.expectedBehavior}\n\n`;
    });
  }

  if (data.assumptions?.length) {
    md += `## Assumptions\n\n`;

    data.assumptions.forEach((item: any) => {
      md += `- ${item.assumption}\n`;
    });

    md += '\n';
  }

  if (data.nonFunctionalRequirements?.length) {
    md += `## Non Functional Requirements\n\n`;

    data.nonFunctionalRequirements.forEach((item: any) => {
      md += `### ${item.category}\n`;
      md += `${item.requirement}\n\n`;
    });
  }

  if (data.recommendations?.length) {
    md += `## Recommendations\n\n`;

    data.recommendations.forEach((item: any) => {
      md += `### ${item.issue}\n`;
      md += `Severity: ${item.severity}\n`;
      md += `Related Section: ${item.relatedSection}\n\n`;
      md += `Explanation:\n${item.explanation}\n\n`;
      md += `Suggested Fix:\n${item.suggestedFix}\n\n`;
    });
  }

  if (data.outOfScope?.length) {
    md += `## Out of Scope\n\n`;

    data.outOfScope.forEach((item: string) => {
      md += `- ${item}\n`;
    });

    md += '\n';
  }

  if (data.successMetrics?.length) {
    md += `## Success Metrics\n\n`;

    data.successMetrics.forEach((item: any) => {
      md += `- ${item.metric} → ${item.target}\n`;
    });
  }

  return md;
}