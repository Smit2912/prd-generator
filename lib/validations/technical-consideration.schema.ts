import { z } from 'zod';

export const TechnicalConsiderationSchema = z.object({
  category: z
    .enum([
      'architecture',
      'security',
      'performance',
      'integration',
      'compliance',
    ])
    .describe('Technical domain the consideration belongs to'),

  priority: z.enum(['must-have', 'important', 'nice-to-have']),

  detail: z
    .string()
    .describe(
      'Detailed engineering, infrastructure, security, or architectural consideration required for implementation'
    ),
});

export type TechnicalConsideration = z.infer<
  typeof TechnicalConsiderationSchema
>;
