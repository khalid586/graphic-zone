/**
 * Shared formatting utilities for the application.
 * Centralizes all locale-specific formatting (Bengali/Bangla).
 */

/** Format a number as Bangladeshi Taka currency */
export const formatCurrency = (amount: number): string =>
    '৳' + amount.toLocaleString('en-BD');

/** Format a date string to Bengali long format (e.g., "২৫ ফেব্রুয়ারি ২০২৬") */
export const formatDateLong = (dateStr: string): string =>
    new Date(dateStr).toLocaleDateString('bn-BD', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

/** Format a date string to Bengali short format (e.g., "২৫ ফেব্রু ২০২৬") */
export const formatDateShort = (dateStr: string): string =>
    new Date(dateStr).toLocaleDateString('bn-BD', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

/** Generate a unique transaction ID from timestamp + random suffix */
export const generateTransactionId = (): string =>
    'TXN-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
