import { z } from 'zod';

export const EdgeCaseSchema = z.object({
  scenario: z
    .string()
    .describe(
      'Exceptional, failure, or unusual scenario the system must handle gracefully'
    ),

  priority: z.enum(['critical', 'important', 'minor']),

  expectedBehavior: z
    .string()
    .describe(
      'Expected system response or recovery behavior for the edge case'
    ),
});

export type EdgeCase = z.infer<typeof EdgeCaseSchema>;
