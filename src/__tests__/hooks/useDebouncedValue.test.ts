import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';

describe('useDebouncedValue', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('returns the initial value immediately', () => {
        const { result } = renderHook(() => useDebouncedValue('hello'));
        expect(result.current).toBe('hello');
    });

    it('does not update the value before the delay', () => {
        const { result, rerender } = renderHook(
            ({ value }) => useDebouncedValue(value, 300),
            { initialProps: { value: 'a' } },
        );

        rerender({ value: 'b' });

        // Advance less than the delay
        act(() => vi.advanceTimersByTime(200));
        expect(result.current).toBe('a');
    });

    it('updates the value after the delay', () => {
        const { result, rerender } = renderHook(
            ({ value }) => useDebouncedValue(value, 300),
            { initialProps: { value: 'a' } },
        );

        rerender({ value: 'b' });
        act(() => vi.advanceTimersByTime(300));
        expect(result.current).toBe('b');
    });

    it('resets the timer on rapid changes', () => {
        const { result, rerender } = renderHook(
            ({ value }) => useDebouncedValue(value, 300),
            { initialProps: { value: 'a' } },
        );

        rerender({ value: 'b' });
        act(() => vi.advanceTimersByTime(200));
        // Change again before timeout fires
        rerender({ value: 'c' });
        act(() => vi.advanceTimersByTime(200));
        // Only 200ms since last change — should still be 'a'
        expect(result.current).toBe('a');

        // Finish the remaining 100ms
        act(() => vi.advanceTimersByTime(100));
        expect(result.current).toBe('c');
    });

    it('uses default delay of 300ms', () => {
        const { result, rerender } = renderHook(
            ({ value }) => useDebouncedValue(value),
            { initialProps: { value: 1 } },
        );

        rerender({ value: 2 });
        act(() => vi.advanceTimersByTime(299));
        expect(result.current).toBe(1);

        act(() => vi.advanceTimersByTime(1));
        expect(result.current).toBe(2);
    });

    it('supports custom delay', () => {
        const { result, rerender } = renderHook(
            ({ value }) => useDebouncedValue(value, 500),
            { initialProps: { value: 'x' } },
        );

        rerender({ value: 'y' });
        act(() => vi.advanceTimersByTime(499));
        expect(result.current).toBe('x');

        act(() => vi.advanceTimersByTime(1));
        expect(result.current).toBe('y');
    });
});
