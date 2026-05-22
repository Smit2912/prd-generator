type Severity = 'low' | 'medium' | 'high';

type SeverityBadgeProps = {
  severity: Severity;
};

const severityStyles: Record<Severity, string> = {
  low: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',

  medium: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',

  high: 'bg-red-500/10 text-red-300 border-red-500/20',
};

export default function SeverityBadge({ severity }: SeverityBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full border
        px-2.5 py-1 text-xs font-medium capitalize
        ${severityStyles[severity]}
      `}
    >
      {severity}
    </span>
  );
}
