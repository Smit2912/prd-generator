import { PRD } from '@/lib/validations/prd.schema';

export type PRDSession = {
  id: string;

  prompt: string;

  prd: Partial<PRD>;

  created_at: string;
};
