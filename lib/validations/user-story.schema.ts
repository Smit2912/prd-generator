import { z } from 'zod';

export const UserStorySchema = z.object({
  actor: z
    .string()
    .describe('Primary user role or stakeholder interacting with the feature'),
  action: z.string().describe('Specific action the actor wants to perform'),
  benefit: z.string().describe('Expected value or outcome gained by the actor'),
});

export type UserStory = z.infer<typeof UserStorySchema>;
