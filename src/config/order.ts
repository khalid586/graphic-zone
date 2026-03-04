/**
 * Order-related display configuration.
 *
 * Extracted from components so that:
 *   1. Multiple views (desktop table, mobile cards, exports) share
 *      the same visual language without prop-drilling.
 *   2. Adding a new status is a config change, not a multi-file edit.
 *   3. Bengali labels are co-located with their styling — easier for
 *      translators and for future i18n extraction.
 */

import type { OrderStatus, PaymentStatus } from '@/types/profile';

// ── Order status ──────────────────────────────────────────────────

export interface StatusStyle {
    readonly bg: string;
    readonly text: string;
    readonly dot: string;
}

export const ORDER_STATUS_STYLES: Readonly<Record<OrderStatus, StatusStyle>> = {
    Completed: { bg: 'bg-success/10', text: 'text-success', dot: 'bg-success' },
    Pending: { bg: 'bg-warning/20', text: 'text-warning', dot: 'bg-warning' },
    Processing: { bg: 'bg-info/10', text: 'text-info', dot: 'bg-info' },
    Cancelled: { bg: 'bg-destructive/10', text: 'text-destructive', dot: 'bg-destructive' },
} as const;

export const ORDER_STATUS_LABELS: Readonly<Record<OrderStatus, string>> = {
    Completed: 'Completed',
    Pending: 'Pending',
    Processing: 'Processing',
    Cancelled: 'Cancelled',
} as const;

// ── Payment status ────────────────────────────────────────────────

export interface PaymentStyle {
    readonly bg: string;
    readonly text: string;
}

export const PAYMENT_STATUS_STYLES: Readonly<Record<PaymentStatus, PaymentStyle>> = {
    Paid: { bg: 'bg-success/10', text: 'text-success' },
    Unpaid: { bg: 'bg-destructive/10', text: 'text-destructive' },
    Partial: { bg: 'bg-warning/20', text: 'text-warning' },
    Refunded: { bg: 'bg-muted', text: 'text-muted-foreground' },
} as const;

export const PAYMENT_STATUS_LABELS: Readonly<Record<PaymentStatus, string>> = {
    Paid: 'Paid',
    Unpaid: 'Unpaid',
    Partial: 'Partial',
    Refunded: 'Refunded',
} as const;

// ── Filter helpers ────────────────────────────────────────────────

export type OrderFilterType = 'All' | OrderStatus;

export const ORDER_FILTERS: readonly OrderFilterType[] = [
    'All',
    'Completed',
    'Pending',
    'Processing',
    'Cancelled',
] as const;

export const ORDER_FILTER_LABELS: Readonly<Record<OrderFilterType, string>> = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending',
    Processing: 'Processing',
    Cancelled: 'Cancelled',
} as const;

// ── Sort ──────────────────────────────────────────────────────────

export type OrderSortField = 'orderDate' | 'totalAmount';
