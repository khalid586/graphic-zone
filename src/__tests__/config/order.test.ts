import { describe, it, expect } from 'vitest';
import {
    ORDER_STATUS_STYLES,
    ORDER_STATUS_LABELS,
    PAYMENT_STATUS_STYLES,
    PAYMENT_STATUS_LABELS,
    ORDER_FILTERS,
    ORDER_FILTER_LABELS,
} from '@/config/order';

describe('ORDER_STATUS_STYLES', () => {
    it('has entries for all known statuses', () => {
        const statuses = ['Completed', 'Processing', 'Pending', 'Cancelled'] as const;
        statuses.forEach((s) => {
            expect(ORDER_STATUS_STYLES[s]).toBeDefined();
            expect(ORDER_STATUS_STYLES[s].bg).toBeTruthy();
            expect(ORDER_STATUS_STYLES[s].text).toBeTruthy();
        });
    });
});

describe('ORDER_STATUS_LABELS', () => {
    it('maps statuses to Bengali labels', () => {
        expect(typeof ORDER_STATUS_LABELS.Completed).toBe('string');
        expect(ORDER_STATUS_LABELS.Completed.length).toBeGreaterThan(0);
    });
});

describe('PAYMENT_STATUS_STYLES', () => {
    it('has entries for all known payment statuses', () => {
        const statuses = ['Paid', 'Unpaid', 'Partial', 'Refunded'] as const;
        statuses.forEach((s) => {
            expect(PAYMENT_STATUS_STYLES[s]).toBeDefined();
            expect(PAYMENT_STATUS_STYLES[s].bg).toBeTruthy();
            expect(PAYMENT_STATUS_STYLES[s].text).toBeTruthy();
        });
    });
});

describe('PAYMENT_STATUS_LABELS', () => {
    it('maps payment statuses to Bengali labels', () => {
        expect(typeof PAYMENT_STATUS_LABELS.Paid).toBe('string');
        expect(PAYMENT_STATUS_LABELS.Paid.length).toBeGreaterThan(0);
    });
});

describe('ORDER_FILTERS', () => {
    it('includes "All" filter', () => {
        expect(ORDER_FILTERS).toContain('All');
    });

    it('every filter has a label', () => {
        ORDER_FILTERS.forEach((f) => {
            expect(ORDER_FILTER_LABELS[f]).toBeTruthy();
        });
    });
});
