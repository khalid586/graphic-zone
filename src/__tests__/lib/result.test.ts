import { describe, it, expect } from 'vitest';
import { ok, fail, appError, mapResult, tryCatch } from '@/lib/result';
import type { Result, AppError } from '@/lib/result';

// ── Constructors ──────────────────────────────────────────────────

describe('ok', () => {
    it('creates a Success with the given data', () => {
        const result = ok(42);
        expect(result).toEqual({ ok: true, data: 42 });
    });

    it('preserves complex data types', () => {
        const data = { name: 'test', items: [1, 2] };
        const result = ok(data);
        expect(result.ok).toBe(true);
        if (result.ok) expect(result.data).toBe(data); // referential equality
    });
});

describe('fail', () => {
    it('creates a Failure with the given error', () => {
        const error = appError('NOT_FOUND', 'missing');
        const result = fail(error);
        expect(result).toEqual({ ok: false, error });
    });
});

describe('appError', () => {
    it('creates an error with code & message', () => {
        const err = appError('VALIDATION', 'bad input');
        expect(err.code).toBe('VALIDATION');
        expect(err.message).toBe('bad input');
        expect(err.cause).toBeUndefined();
    });

    it('optionally includes a cause', () => {
        const cause = new TypeError('oops');
        const err = appError('INTERNAL', 'wrapped', cause);
        expect(err.cause).toBe(cause);
    });
});

// ── mapResult ─────────────────────────────────────────────────────

describe('mapResult', () => {
    it('transforms the data of a Success', () => {
        const result = mapResult(ok(10), (n) => n * 2);
        expect(result).toEqual({ ok: true, data: 20 });
    });

    it('passes through a Failure unchanged', () => {
        const error = appError('NETWORK', 'timeout');
        const result: Result<number> = fail(error);
        const mapped = mapResult(result, (n) => n * 2);
        expect(mapped.ok).toBe(false);
        if (!mapped.ok) expect(mapped.error).toBe(error);
    });
});

// ── tryCatch ──────────────────────────────────────────────────────

describe('tryCatch', () => {
    it('wraps a resolved promise in ok()', async () => {
        const result = await tryCatch(() => Promise.resolve('hello'));
        expect(result).toEqual({ ok: true, data: 'hello' });
    });

    it('wraps a rejected promise in fail()', async () => {
        const result = await tryCatch(() => Promise.reject(new Error('boom')));
        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.error.code).toBe('INTERNAL');
            expect(result.error.message).toBe('boom');
        }
    });

    it('uses custom error mapper when provided', async () => {
        const result = await tryCatch(
            () => Promise.reject(new Error('gone')),
            () => appError('NOT_FOUND', 'custom message'),
        );
        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.error.code).toBe('NOT_FOUND');
            expect(result.error.message).toBe('custom message');
        }
    });

    it('handles non-Error throw values', async () => {
        const result = await tryCatch(() => Promise.reject('string error'));
        expect(result.ok).toBe(false);
        if (!result.ok) {
            expect(result.error.message).toBe('string error');
        }
    });
});
