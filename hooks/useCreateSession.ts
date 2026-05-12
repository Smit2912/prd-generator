'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createSession } from '@/lib/react-query/session-mutations';

export function useCreateSession() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createSession,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['prd-sessions'],
      });
    },
  });
}
