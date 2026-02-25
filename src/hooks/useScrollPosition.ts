'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks whether the page has scrolled past a threshold.
 * @param threshold - Scroll offset in pixels above which `isScrolled` becomes true (default: 50).
 */
export const useScrollPosition = (threshold = 50): boolean => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > threshold);
        handleScroll(); // check initial position
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return isScrolled;
};
