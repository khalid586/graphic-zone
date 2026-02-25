import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

describe('useBodyScrollLock', () => {
    it('sets overflow to hidden when locked', () => {
        document.body.style.overflow = '';
        renderHook(() => useBodyScrollLock(true));
        expect(document.body.style.overflow).toBe('hidden');
    });

    it('does not change overflow when not locked', () => {
        document.body.style.overflow = 'auto';
        renderHook(() => useBodyScrollLock(false));
        expect(document.body.style.overflow).toBe('auto');
    });

    it('restores previous overflow on unmount', () => {
        document.body.style.overflow = 'auto';
        const { unmount } = renderHook(() => useBodyScrollLock(true));
        expect(document.body.style.overflow).toBe('hidden');
        unmount();
        expect(document.body.style.overflow).toBe('auto');
    });
});
