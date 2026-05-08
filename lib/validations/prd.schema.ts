import { z } from "zod";

export const UserStorySchema = z.object({
  actor: z.string(),
  action: z.string(),
  benefit: z.string(),
});

export const AcceptanceCriteriaSchema = z.object({
  criterion: z.string(),
  priority: z.enum(["low", "medium", "high"]),
});

export const PRDSchema = z.object({
  title: z.string(),

  overview: z.string(),

  problemStatement: z.object({
    summary: z.string(),
    painPoints: z.array(z.string()),
    businessImpact: z.string(),
  }),

  userStories: z.array(UserStorySchema),

  acceptanceCriteria: z.array(
    AcceptanceCriteriaSchema
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
export type UserStory = z.infer<typeof UserStorySchema>;
export type UserStories = z.infer<typeof UserStorySchema>[];