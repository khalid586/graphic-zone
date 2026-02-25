import { describe, it, expect } from 'vitest';
import { MOCK_USER, MOCK_ORDERS, MOCK_ACTIVITY } from '@/data/profile';

describe('MOCK_USER', () => {
    it('has required profile fields', () => {
        expect(MOCK_USER.name).toBeTruthy();
        expect(MOCK_USER.email).toBeTruthy();
        expect(MOCK_USER.phone).toBeTruthy();
        expect(MOCK_USER.avatar).toMatch(/^https?:\/\//);
        expect(MOCK_USER.totalOrders).toBeGreaterThanOrEqual(0);
        expect(MOCK_USER.totalSpent).toBeGreaterThanOrEqual(0);
    });
});

describe('MOCK_ORDERS', () => {
    it('has at least one order', () => {
        expect(MOCK_ORDERS.length).toBeGreaterThan(0);
    });

    it('each order has required fields', () => {
        MOCK_ORDERS.forEach((o) => {
            expect(o.id).toBeTruthy();
            expect(o.projectName).toBeTruthy();
            expect(o.orderDate).toBeTruthy();
            expect(['Completed', 'Pending', 'Processing', 'Cancelled']).toContain(o.status);
            expect(['Paid', 'Unpaid', 'Partial', 'Refunded']).toContain(o.paymentStatus);
            expect(o.totalAmount).toBeGreaterThan(0);
            expect(o.items).toBeGreaterThan(0);
        });
    });
});

describe('MOCK_ACTIVITY', () => {
    it('has at least one activity', () => {
        expect(MOCK_ACTIVITY.length).toBeGreaterThan(0);
    });

    it('each activity has required fields', () => {
        MOCK_ACTIVITY.forEach((a) => {
            expect(a.id).toBeDefined();
            expect(a.action).toBeTruthy();
            expect(a.description).toBeTruthy();
            expect(a.timestamp).toBeTruthy();
            expect(['order', 'payment', 'download', 'update']).toContain(a.icon);
        });
    });
});
