'use client';

import { use, useEffect, useRef } from 'react';

import { experimental_useObject as useObject } from '@ai-sdk/react';

import AppShell from '@/components/layout/AppShell';
import Sidebar from '@/components/layout/Sidebar';

import PRDViewer from '@/components/prd/PRDViewer';

import { useSession } from '@/hooks/useSession';
import { useUpdateSession } from '@/hooks/useUpdateSession';

import { PRDSchema } from '@/lib/validations/prd.schema';

type PRDPageProps = {
  params: Promise<{
    id: string;
  }>;

  searchParams: Promise<{
    prompt?: string;
  }>;
};

export default function PRDPage({ params, searchParams }: PRDPageProps) {
  const { id } = use(params);

  const { prompt } = use(searchParams);

  const hasGeneratedRef = useRef(false);

  const { data: session, isLoading: isSessionLoading, error } = useSession(id);

  const { mutate: updateSession } = useUpdateSession();

  const { submit, object, isLoading: isGenerating } = useObject({
    api: '/api/generate-prd',
    schema: PRDSchema,
  });

  useEffect(() => {
    if (!session || session.prd || !prompt || hasGeneratedRef.current) {
      return;
    }

    hasGeneratedRef.current = true;

    submit({
      prompt,
    });
  }, [session, prompt, submit]);

  useEffect(() => {
    if (!object || isGenerating) {
      return;
    }

    updateSession({
      id,
      prd: object,
    });
  }, [object, isGenerating, id, updateSession]);

  return (
    <AppShell sidebar={<Sidebar />}>
      <div className='mx-auto max-w-5xl p-6'>
        <PRDViewer
          data={object || session?.prd}
          isLoading={isSessionLoading || isGenerating}
          error={error instanceof Error ? error : undefined}
        />
      </div>
    </AppShell>
  );
}
