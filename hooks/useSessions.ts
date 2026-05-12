'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchSessions } from '@/lib/react-query/session-queries';

export function useSessions() {
  return useQuery({
    queryKey: ['prd-sessions'],
    queryFn: fetchSessions,
  });
}
