/**
 * Reusable status badge component.
 *
 * Driven by the config layer rather than inline style maps —
 * every view (table, card, export) renders identical badges
 * from a single source of truth.
 */

import { memo } from 'react';

interface StatusBadgeProps {
    /** Display label (Bengali) */
    readonly label: string;
    /** Background class, e.g. 'bg-emerald-50' */
    readonly bg: string;
    /** Text color class, e.g. 'text-emerald-700' */
    readonly text: string;
    /** Optional dot color class for order-status style */
    readonly dot?: string;
}

const StatusBadge = memo(({ label, bg, text, dot }: StatusBadgeProps) => (
    <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${bg} ${text}`}
    >
        {dot && <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />}
        {label}
    </span>
));

StatusBadge.displayName = 'StatusBadge';

export default StatusBadge;
