'use client';

import { use } from 'react';

import AppShell from '@/components/layout/AppShell';
import Sidebar from '@/components/layout/Sidebar';

import PRDViewer from '@/components/prd/PRDViewer';

import { useSession } from '@/hooks/useSession';

type PRDPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function PRDPage({ params }: PRDPageProps) {
  const { id } = use(params);

  const { data, isLoading, error } = useSession(id);

  return (
    <AppShell sidebar={<Sidebar />}>
      <div className='mx-auto max-w-5xl p-6'>
        <PRDViewer
          data={data?.prd}
          isLoading={isLoading}
          error={error instanceof Error ? error : undefined}
        />
      </div>
    </AppShell>
  );
}
