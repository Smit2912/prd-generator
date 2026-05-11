'use client';

import { experimental_useObject as useObject } from '@ai-sdk/react';

import AppShell from '@/components/layout/AppShell';
import Sidebar from '@/components/layout/Sidebar';

import PromptForm from '@/components/prd/PromptForm';
import PRDViewer from '@/components/prd/PRDViewer';
import EmptyState from '@/components/prd/EmptyState';

import { PRDSchema } from '@/lib/validations/prd.schema';

export default function HomePage() {
  const { submit, object, isLoading, error } = useObject({
    api: '/api/generate-prd',
    schema: PRDSchema,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    submit({
      prompt: formData.get('prompt'),
    });
  };

  return (
    <AppShell sidebar={<Sidebar />}>
      <PromptForm onSubmit={handleSubmit} isLoading={isLoading} />

      <div className='mx-auto max-w-5xl p-6'>
        {object || isLoading ? (
          <PRDViewer data={object} isLoading={isLoading} error={error} />
        ) : (
          <EmptyState />
        )}
      </div>
    </AppShell>
  );
}
