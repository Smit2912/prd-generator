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

type UpdateSessionPayload = {
  id: string;
  prd: unknown;
};

export async function updateSessionPRD({ id, prd }: UpdateSessionPayload) {
  const { data, error } = await supabase
    .from('prd_sessions')
    .update({
      prd,
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createDraftSession(prompt: string) {
  const { data, error } = await supabase
    .from('prd_sessions')
    .insert({
      prompt,
      prd: null,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
