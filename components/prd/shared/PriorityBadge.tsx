type Priority =
  | 'low'
  | 'medium'
  | 'high'
  | 'must-have'
  | 'important'
  | 'nice-to-have';

type PriorityBadgeProps = {
  priority: Priority;
};

const priorityStyles: Record<Priority, string> = {
  low: 'bg-zinc-800 text-zinc-300 border-zinc-700',

  medium: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',

  high: 'bg-red-500/10 text-red-300 border-red-500/20',

  'must-have': 'bg-red-500/10 text-red-300 border-red-500/20',

  important: 'bg-orange-500/10 text-orange-300 border-orange-500/20',

  'nice-to-have': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
};

export default function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full border
        px-2.5 py-1 text-xs font-medium capitalize
        ${priorityStyles[priority]}
      `}
    >
      {priority.replaceAll('-', ' ')}
    </span>
  );
}
