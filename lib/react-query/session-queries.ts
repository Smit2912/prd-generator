import { supabase } from '@/lib/supabase/client';

export async function fetchSessions() {
  const { data, error } = await supabase
    .from('prd_sessions')
    .select('*')
    .order('created_at', {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function fetchSessionById(
  id: string
) {
  const { data, error } = await supabase
    .from('prd_sessions')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
