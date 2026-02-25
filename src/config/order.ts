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
    Completed: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
    Pending: { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
    Processing: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500' },
    Cancelled: { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
} as const;

export const ORDER_STATUS_LABELS: Readonly<Record<OrderStatus, string>> = {
    Completed: 'সম্পন্ন',
    Pending: 'বাকি',
    Processing: 'প্রক্রিয়াকরণ',
    Cancelled: 'বাতিল',
} as const;

// ── Payment status ────────────────────────────────────────────────

export interface PaymentStyle {
    readonly bg: string;
    readonly text: string;
}

export const PAYMENT_STATUS_STYLES: Readonly<Record<PaymentStatus, PaymentStyle>> = {
    Paid: { bg: 'bg-emerald-50', text: 'text-emerald-700' },
    Unpaid: { bg: 'bg-red-50', text: 'text-red-700' },
    Partial: { bg: 'bg-amber-50', text: 'text-amber-700' },
    Refunded: { bg: 'bg-slate-100', text: 'text-slate-600' },
} as const;

export const PAYMENT_STATUS_LABELS: Readonly<Record<PaymentStatus, string>> = {
    Paid: 'পরিশোধিত',
    Unpaid: 'অপরিশোধিত',
    Partial: 'আংশিক',
    Refunded: 'রিফান্ডেড',
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
    All: 'সব',
    Completed: 'সম্পন্ন',
    Pending: 'বাকি',
    Processing: 'প্রক্রিয়াকরণ',
    Cancelled: 'বাতিল',
} as const;

// ── Sort ──────────────────────────────────────────────────────────

export type OrderSortField = 'orderDate' | 'totalAmount';
