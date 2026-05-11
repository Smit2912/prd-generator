import { z } from 'zod';

export const TechnicalConsiderationSchema = z.object({
  category: z.enum([
    'architecture',
    'security',
    'performance',
    'integration',
    'compliance',
  ]),

  priority: z.enum(['must-have', 'important', 'nice-to-have']),

  detail: z.string(),
});

export type TechnicalConsideration = z.infer<
  typeof TechnicalConsiderationSchema
>;
