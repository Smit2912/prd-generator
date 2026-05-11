import { z } from 'zod';

export const AssumptionSchema = z.object({
  assumption: z
    .string()
    .describe(
      'Condition or dependency assumed to already exist for successful implementation'
    ),
});

export const AssumptionsSchema = z.array(AssumptionSchema);

export type Assumption = z.infer<typeof AssumptionSchema>;
export type Assumptions = z.infer<typeof AssumptionsSchema>;
