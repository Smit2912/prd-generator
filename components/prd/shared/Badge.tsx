type BadgeVariant =
  | 'low'
  | 'medium'
  | 'high'
  | 'critical'
  | 'important'
  | 'minor'
  | 'must-have'
  | 'nice-to-have';

type BadgeProps = {
  label: string;
  variant: BadgeVariant;
};

const variants: Record<BadgeVariant, string> = {
  low: 'bg-green-500/15 text-green-300 border-green-500/20',
  medium: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/20',
  high: 'bg-red-500/15 text-red-300 border-red-500/20',

  critical: 'bg-red-600/20 text-red-200 border-red-500/30',
  important: 'bg-orange-500/20 text-orange-200 border-orange-500/30',
  minor: 'bg-blue-500/20 text-blue-200 border-blue-500/30',

  'must-have': 'bg-purple-500/20 text-purple-200 border-purple-500/30',

  'nice-to-have': 'bg-zinc-700 text-zinc-300 border-zinc-600',
};

export default function Badge({ label, variant }: BadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium capitalize ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
