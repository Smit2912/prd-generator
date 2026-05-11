import { z } from 'zod';

export const EdgeCaseSchema = z.object({
  scenario: z.string(),

  priority: z.enum(['critical', 'important', 'minor']),

  expectedBehavior: z.string(),
});

export type EdgeCase = z.infer<typeof EdgeCaseSchema>;