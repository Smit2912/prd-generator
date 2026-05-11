import { z } from 'zod';

export const AcceptanceCriteriaSchema = z.object({
  criterion: z.string(),
  priority: z.enum(['low', 'medium', 'high']),
});

export type AcceptanceCriteria = z.infer<typeof AcceptanceCriteriaSchema>;
