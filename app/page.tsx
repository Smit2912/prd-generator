'use client';

import { experimental_useObject as useObject } from '@ai-sdk/react';

import AppShell from '@/components/layout/AppShell';
import Sidebar from '@/components/layout/Sidebar';

import PromptForm from '@/components/prd/PromptForm';
import PRDViewer from '@/components/prd/PRDViewer';
import EmptyState from '@/components/prd/EmptyState';

import { PRDSchema } from '@/lib/validations/prd.schema';

import { useEffect, useRef, useState } from 'react';

import { useCreateSession } from '@/hooks/useCreateSession';

import StreamingStatus from '@/components/prd/StreamingStatus';

export default function HomePage() {
  const [prompt, setPrompt] = useState('');

  const { mutate: saveSession } = useCreateSession();

  const hasSavedRef = useRef(false);

  const { submit, object, isLoading, error } = useObject({
    api: '/api/generate-prd',
    schema: PRDSchema,
  });

  useEffect(() => {
    if (!object || isLoading || hasSavedRef.current) {
      return;
    }

    hasSavedRef.current = true;

    saveSession({
      prompt: String(prompt),
      prd: object,
    });
  }, [object, isLoading, saveSession, prompt]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submit({
      prompt,
    });

    hasSavedRef.current = false;
  };

  return (
    <AppShell sidebar={<Sidebar isGenerating={isLoading} />}>
      <PromptForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        prompt={prompt}
        setPrompt={setPrompt}
      />

      <div className='mx-auto max-w-5xl p-6'>
        {!object && !isLoading ? (
          <EmptyState />
        ) : (
          <>
            <StreamingStatus isLoading={isLoading} />
            <PRDViewer data={object} isLoading={isLoading} error={error} />
          </>
        )}
      </div>
    </AppShell>
  );
}
