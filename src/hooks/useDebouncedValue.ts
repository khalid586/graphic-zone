'use client';

import { useState, useEffect } from 'react';

/**
 * Returns a debounced version of `value`.
 *
 * The returned value only updates after the caller has stopped changing
 * `value` for `delay` ms. Useful for search inputs to avoid filtering
 * on every keystroke.
 *
 * @param value - The raw (fast-changing) value.
 * @param delay - Debounce window in milliseconds (default: 300).
 */
export function useDebouncedValue<T>(value: T, delay = 300): T {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debounced;
}
