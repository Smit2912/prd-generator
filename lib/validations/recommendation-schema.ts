import { z } from 'zod';

export const RecommendationSchema = z.object({
  issue: z.string(),

  explanation: z.string(),

  suggestedFix: z.string(),

  severity: z.enum(['low', 'medium', 'high']),
});

export type Recommendation = z.infer<typeof RecommendationSchema>;
