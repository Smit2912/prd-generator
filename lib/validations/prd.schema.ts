import { z } from 'zod';
import { TechnicalConsiderationSchema } from './technical-consideration.schema';
import { EdgeCaseSchema } from './edge-case.schema';
import { AssumptionsSchema } from './assumptions.schema';
import { AcceptanceCriteriaSchema } from './acceptance-criteria.schema';
import { UserStorySchema } from './user-story.schema';
import { NonFunctionalRequirementSchema } from './non-functional-requirement.schema';
import { RecommendationSchema } from './recommendation-schema';

export const PRDSchema = z.object({
  title: z.string().describe('Concise product or feature name for the PRD'),

  overview: z
    .string()
    .min(10)
    .describe(
      'High-level summary of the product, feature, or system being proposed'
    ),

  problemStatement: z.object({
    summary: z
      .string()
      .min(10)
      .describe('Core business or user problem the feature aims to solve'),
    painPoints: z
      .array(
        z
          .string()
          .describe(
            'Specific frustration, limitation, or inefficiency experienced by users or the business'
          )
      )
      .describe(
        'List of key pain points caused by the current system or workflow'
      ),
    businessImpact: z
      .string()
      .min(10)
      .describe(
        'Business value, operational improvement, or financial impact expected from solving the problem'
      ),
  }),

  userStories: z.array(UserStorySchema),

  acceptanceCriteria: z.array(AcceptanceCriteriaSchema),

  technicalConsiderations: z.array(TechnicalConsiderationSchema),

  edgeCases: z.array(EdgeCaseSchema),

  assumptions: AssumptionsSchema,

  nonFunctionalRequirements: z.array(NonFunctionalRequirementSchema),

  recommendations: z
    .array(RecommendationSchema)
    .describe(
      'Actionable engineering or product recommendations for improving the proposed system'
    ),

  outOfScope: z.array(z.string()),

  successMetrics: z.array(
    z.object({
      metric: z.string(),
      target: z.string(),
    })
  ),
});

export type PRD = z.infer<typeof PRDSchema>;
