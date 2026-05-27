'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import AppShell from '@/components/layout/AppShell';
import Sidebar from '@/components/layout/Sidebar';

import PromptForm from '@/components/prd/PromptForm';
import EmptyState from '@/components/prd/EmptyState';

import { useCreateDraftSession } from '@/hooks/useCreateDraftSession';

export default function HomePage() {
  const router = useRouter();

  const [prompt, setPrompt] = useState('');

  const { mutate: createDraft, isPending } = useCreateDraftSession();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createDraft(prompt, {
      onSuccess: (session) => {
        router.push(`/prd/${session.id}?prompt=${encodeURIComponent(prompt)}`);
      },
    });
  };

  return (
    <AppShell sidebar={<Sidebar />}>
      <PromptForm
        onSubmit={handleSubmit}
        isLoading={isPending}
        prompt={prompt}
        setPrompt={setPrompt}
      />

      <div className='mx-auto max-w-5xl p-6 pb-36'>
        <EmptyState />
      </div>
    </AppShell>
  );
}
