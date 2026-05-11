import { z } from 'zod';
import { TechnicalConsiderationSchema } from './technical-consideration.schema';
import { EdgeCaseSchema } from './edge-case.schema';
import { AssumptionsSchema } from './assumptions.schema';
import { AcceptanceCriteriaSchema } from './acceptance-criteria.schema';
import { UserStorySchema } from './user-story.schema';
import { NonFunctionalRequirementSchema } from './non-functional-requirement.schema';
import { RecommendationSchema } from './recommendation-schema';

export const PRDSchema = z.object({
  title: z.string(),

  overview: z.string().min(10),

  problemStatement: z.object({
    summary: z.string().min(10),
    painPoints: z.array(z.string()),
    businessImpact: z.string().min(10),
  }),

  userStories: z.array(UserStorySchema),

  acceptanceCriteria: z.array(AcceptanceCriteriaSchema),

  technicalConsiderations: z.array(TechnicalConsiderationSchema),

  edgeCases: z.array(EdgeCaseSchema),

  assumptions: AssumptionsSchema,

  nonFunctionalRequirements: z.array(NonFunctionalRequirementSchema),

  recommendations: z.array(RecommendationSchema),

  outOfScope: z.array(z.string()),

  successMetrics: z.array(
    z.object({
      metric: z.string(),
      target: z.string(),
    })
  ),
});

export type PRD = z.infer<typeof PRDSchema>;
