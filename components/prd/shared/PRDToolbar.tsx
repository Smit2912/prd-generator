'use client';

import { useEffect, useRef, useState } from 'react';
import { exportPRDAsPDF } from '@/lib/export/export-pdf';

type PRDToolbarProps = {
  title?: string;
  markdown: string;
  data?: any;
};

export default function PRDToolbar({ title, markdown, data }: PRDToolbarProps) {
  const [copied, setCopied] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCopyAll = async () => {
    await navigator.clipboard.writeText(markdown);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleExportMD = () => {
    const blob = new Blob([markdown], {
      type: 'text/markdown;charset=utf-8;',
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');

    link.href = url;

    link.setAttribute(
      'download',
      `${title?.toLowerCase().replace(/\s+/g, '-') || 'prd'}.md`,
    );

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    setDropdownOpen(false);
  };

  const handleExportPDF = async () => {
    setDropdownOpen(false);

    await exportPRDAsPDF(data);
  };

  return (
    <div className='sticky top-0 z-30 flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/80 px-6 py-4 shadow-xl backdrop-blur-md print:hidden'>
      <div className='flex min-w-0 items-center gap-3'>
        <div className='h-2 w-2 animate-pulse rounded-full bg-emerald-500 flex-shrink-0' />

        <h1 className='max-w-[200px] truncate text-base font-semibold text-zinc-100 sm:max-w-md'>
          {title || 'Drafting PRD...'}
        </h1>
      </div>

      <div className='flex items-center gap-3'>
        <button
          onClick={handleCopyAll}
          className='flex items-center gap-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 hover:border-zinc-700 text-zinc-200 px-4 py-2.5 text-xs font-semibold tracking-wide transition cursor-pointer'
        >
          {copied ? (
            <>
              <svg
                className='h-4 w-4 text-emerald-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span className='text-emerald-400'>Copied!</span>
            </>
          ) : (
            <>
              <svg
                className='h-4 w-4 text-zinc-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
                />
              </svg>
              <span>Copy Markdown</span>
            </>
          )}
        </button>

        <div className='relative' ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className='flex items-center gap-2 rounded-xl bg-white hover:bg-zinc-200 text-black px-4 py-2.5 text-xs font-semibold tracking-wide transition cursor-pointer font-medium'
          >
            <svg
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
              />
            </svg>
            <span>Export</span>
            <svg
              className={`h-3 w-3 text-zinc-650 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2.5}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div className='absolute right-0 mt-2 w-48 rounded-xl border border-zinc-800 bg-zinc-950 p-1.5 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-100'>
              <button
                onClick={handleExportPDF}
                className='flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white transition cursor-pointer'
              >
                <svg
                  className='h-4 w-4 text-zinc-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z'
                  />
                </svg>
                <span>Export as PDF</span>
              </button>

              <button
                onClick={handleExportMD}
                className='flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white transition cursor-pointer border-t border-zinc-900/50 mt-1 pt-1.5'
              >
                <svg
                  className='h-4 w-4 text-zinc-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
                <span>Export as MD File</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
