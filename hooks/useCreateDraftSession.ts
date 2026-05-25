'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createDraftSession } from '@/lib/react-query/session-mutations';

export function useCreateDraftSession() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createDraftSession,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['prd-sessions'],
      });
    },
  });
}
