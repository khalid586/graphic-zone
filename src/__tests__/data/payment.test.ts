import { describe, it, expect } from 'vitest';
import { MOCK_PAYMENT_ORDER, PAYMENT_METHODS } from '@/data/payment';

describe('MOCK_PAYMENT_ORDER', () => {
    it('has required fields', () => {
        expect(MOCK_PAYMENT_ORDER.id).toBeTruthy();
        expect(MOCK_PAYMENT_ORDER.projectName).toBeTruthy();
        expect(MOCK_PAYMENT_ORDER.totalAmount).toBeGreaterThan(0);
        expect(MOCK_PAYMENT_ORDER.paidAmount).toBeGreaterThanOrEqual(0);
        expect(MOCK_PAYMENT_ORDER.remainingDue).toBeGreaterThan(0);
    });

    it('remainingDue = totalAmount - paidAmount', () => {
        expect(MOCK_PAYMENT_ORDER.remainingDue).toBe(
            MOCK_PAYMENT_ORDER.totalAmount - MOCK_PAYMENT_ORDER.paidAmount,
        );
    });
});

describe('PAYMENT_METHODS', () => {
    it('has at least one method', () => {
        expect(PAYMENT_METHODS.length).toBeGreaterThan(0);
    });

    it('each method has valid structure', () => {
        PAYMENT_METHODS.forEach((m) => {
            expect(['card', 'mobile', 'internet']).toContain(m.id);
            expect(m.label).toBeTruthy();
            expect(m.description).toBeTruthy();
            expect(m.providers.length).toBeGreaterThan(0);
        });
    });
});
