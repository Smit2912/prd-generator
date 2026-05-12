'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchSessionById } from '@/lib/react-query/session-queries';

export function useSession(id: string) {
  return useQuery({
    queryKey: ['prd-session', id],

    queryFn: () => fetchSessionById(id),

    enabled: !!id,
  });
}
