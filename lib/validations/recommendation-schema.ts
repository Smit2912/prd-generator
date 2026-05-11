import { z } from 'zod';

export const RecommendationSchema = z.object({
  issue: z
    .string()
    .describe(
      'Specific technical, operational, architectural, or product concern identified in the PRD'
    ),

  explanation: z
    .string()
    .describe(
      'Detailed reasoning explaining why the issue could negatively impact the system or business'
    ),

  suggestedFix: z
    .string()
    .describe(
      'Concrete recommendation or mitigation strategy for resolving the issue'
    ),

  severity: z.enum(['low', 'medium', 'high']),

  relatedSection: z
    .enum([
      'technicalConsiderations',
      'acceptanceCriteria',
      'edgeCases',
      'nonFunctionalRequirements',
    ])
    .describe('PRD section most closely related to this recommendation'),
});

export type Recommendation = z.infer<typeof RecommendationSchema>;
