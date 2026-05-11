import { z } from 'zod';

export const AcceptanceCriteriaSchema = z.object({
  criterion: z
    .string()
    .describe(
      'Measurable functional or operational requirement that determines feature completion'
    ),
  priority: z
    .enum(['low', 'medium', 'high'])
    .describe('Implementation importance level of the acceptance criterion'),
});

export type AcceptanceCriteria = z.infer<typeof AcceptanceCriteriaSchema>;
