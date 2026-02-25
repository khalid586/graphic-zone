import { describe, it, expect } from 'vitest';
import {
    formatCurrency,
    formatDateLong,
    formatDateShort,
    generateTransactionId,
} from '@/lib/format';

describe('formatCurrency', () => {
    it('formats a number with Taka symbol', () => {
        const result = formatCurrency(1000);
        expect(result).toContain('৳');
        expect(result).toContain('1,000');
    });

    it('handles zero', () => {
        expect(formatCurrency(0)).toBe('৳0');
    });

    it('handles large numbers', () => {
        const result = formatCurrency(2_845_000);
        expect(result).toContain('৳');
    });
});

describe('formatDateLong', () => {
    it('formats a date in Bengali long format', () => {
        const result = formatDateLong('2026-01-15');
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
    });
});

describe('formatDateShort', () => {
    it('formats a date in Bengali short format', () => {
        const result = formatDateShort('2026-01-15');
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
    });
});

describe('generateTransactionId', () => {
    it('starts with TXN-', () => {
        const id = generateTransactionId();
        expect(id).toMatch(/^TXN-/);
    });

    it('generates unique IDs', () => {
        const ids = new Set(Array.from({ length: 50 }, () => generateTransactionId()));
        expect(ids.size).toBe(50);
    });

    it('contains only uppercase alphanumeric chars after prefix', () => {
        const id = generateTransactionId();
        const body = id.replace('TXN-', '');
        expect(body).toMatch(/^[A-Z0-9-]+$/);
    });
});
