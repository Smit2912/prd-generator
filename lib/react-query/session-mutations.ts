import { supabase } from '@/lib/supabase/client';

type CreateSessionPayload = {
  prompt: string;
  prd: unknown; // intentional
};

export async function createSession({ prompt, prd }: CreateSessionPayload) {
  const { data, error } = await supabase
    .from('prd_sessions')
    .insert({
      prompt,
      prd,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
