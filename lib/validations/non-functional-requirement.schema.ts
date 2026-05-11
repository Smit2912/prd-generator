import { z } from 'zod';

export const NonFunctionalRequirementSchema = z.object({
  category: z.enum([
    'availability',
    'performance',
    'scalability',
    'security',
    'observability',
  ]),

  requirement: z.string(),
});

export type NonFunctionalRequirement = z.infer<
  typeof NonFunctionalRequirementSchema
>;
