import { ReactNode } from 'react';

type SectionGridProps = {
  children: ReactNode;

  columns?: 1 | 2 | 3;
};

const columnStyles = {
  1: 'grid-cols-1',

  2: 'grid-cols-1 md:grid-cols-2',

  3: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
};

export default function SectionGrid({
  children,
  columns = 1,
}: SectionGridProps) {
  return (
    <div
      className={`
        grid gap-4
        ${columnStyles[columns]}
      `}
    >
      {children}
    </div>
  );
}
