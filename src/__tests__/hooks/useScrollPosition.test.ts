import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

describe('useScrollPosition', () => {
    const originalScrollY = window.scrollY;

    beforeEach(() => {
        Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    });

    afterEach(() => {
        Object.defineProperty(window, 'scrollY', { value: originalScrollY, writable: true });
    });

    it('returns false when not scrolled', () => {
        const { result } = renderHook(() => useScrollPosition(50));
        expect(result.current).toBe(false);
    });

    it('returns true when scrolled past threshold', () => {
        Object.defineProperty(window, 'scrollY', { value: 100, writable: true });

        const { result } = renderHook(() => useScrollPosition(50));

        act(() => {
            window.dispatchEvent(new Event('scroll'));
        });

        expect(result.current).toBe(true);
    });

    it('respects custom threshold', () => {
        Object.defineProperty(window, 'scrollY', { value: 30, writable: true });

        const { result } = renderHook(() => useScrollPosition(50));

        act(() => {
            window.dispatchEvent(new Event('scroll'));
        });

        expect(result.current).toBe(false);
    });
});
