import { pdf } from '@react-pdf/renderer';
import React from 'react';

import PRDPdfDocument from '@/components/pdf/PRDPdfDocument';

export async function exportPRDAsPDF(data: any) {
  const blob = await pdf(
    React.createElement(PRDPdfDocument, { data: data }) as React.ReactElement<any>
  ).toBlob();

  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');

  link.href = url;

  link.download = `${
    data?.title?.toLowerCase().replace(/\s+/g, '-') || 'prd'
  }.pdf`;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}