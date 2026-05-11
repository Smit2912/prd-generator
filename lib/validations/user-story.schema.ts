import { z } from 'zod';

export const UserStorySchema = z.object({
  actor: z.string(),
  action: z.string(),
  benefit: z.string(),
});

export type UserStory = z.infer<typeof UserStorySchema>;