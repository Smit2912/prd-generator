import { z } from 'zod';

export const AssumptionSchema = z.object({
  assumption: z.string(),
});

export const AssumptionsSchema = z.array(AssumptionSchema);

export type Assumption = z.infer<typeof AssumptionSchema>;
export type Assumptions = z.infer<typeof AssumptionsSchema>;