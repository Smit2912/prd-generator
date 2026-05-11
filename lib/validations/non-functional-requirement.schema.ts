import { z } from 'zod';

export const NonFunctionalRequirementSchema = z.object({
  category: z.enum([
    'availability',
    'performance',
    'scalability',
    'security',
    'observability',
  ]),

  requirement: z
    .string()
    .describe(
      'Operational, scalability, reliability, or security requirement that the system must satisfy'
    ),
});

export type NonFunctionalRequirement = z.infer<
  typeof NonFunctionalRequirementSchema
>;
