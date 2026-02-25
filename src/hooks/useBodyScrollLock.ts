'use client';

import { useEffect } from 'react';

/**
 * Locks body scroll when `isLocked` is true.
 * Saves and restores the previous `overflow` value on cleanup to avoid
 * conflicts with other scroll-locking mechanisms.
 */
export const useBodyScrollLock = (isLocked: boolean): void => {
    useEffect(() => {
        if (!isLocked) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isLocked]);
};
