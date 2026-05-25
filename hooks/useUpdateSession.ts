'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateSessionPRD } from '@/lib/react-query/session-mutations';

export function useUpdateSession() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateSessionPRD,

    onSuccess: (session) => {
      queryClient.invalidateQueries({
        queryKey: ['prd-session', session.id],
      });

      queryClient.invalidateQueries({
        queryKey: ['prd-sessions'],
      });
    },
  });
}
