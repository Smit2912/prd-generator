type Category =
  | 'architecture'
  | 'security'
  | 'performance'
  | 'integration'
  | 'compliance'
  | 'availability'
  | 'scalability'
  | 'observability';

type CategoryPillProps = {
  category: Category;
};

const categoryStyles: Record<Category, string> = {
  architecture: 'bg-sky-500/10 text-sky-300 border-sky-500/20',

  security: 'bg-red-500/10 text-red-300 border-red-500/20',

  performance: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',

  integration: 'bg-violet-500/10 text-violet-300 border-violet-500/20',

  compliance: 'bg-orange-500/10 text-orange-300 border-orange-500/20',

  availability: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',

  scalability: 'bg-pink-500/10 text-pink-300 border-pink-500/20',

  observability: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
};

export default function CategoryPill({ category }: CategoryPillProps) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full border
        px-3 py-1 text-xs font-semibold uppercase tracking-wide
        ${categoryStyles[category]}
      `}
    >
      {category.replaceAll('-', ' ')}
    </span>
  );
}
