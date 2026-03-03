/**
 * Shared formatting utilities for the application.
 * Centralizes all locale-specific formatting (Bengali/Bangla).
 */

/** Format a number as Bangladeshi Taka currency */
export const formatCurrency = (amount: number): string =>
    '৳' + amount.toLocaleString('en-BD');

/** Format a date string to Bengali long format (e.g., "25 ফেব্রুয়ারি 2026") */
export const formatDateLong = (dateStr: string): string =>
    new Date(dateStr).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

/** Format a date string to Bengali short format (e.g., "25 ফেব্রু 2026") */
export const formatDateShort = (dateStr: string): string =>
    new Date(dateStr).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

/** Generate a unique transaction ID from timestamp + random suffix */
export const generateTransactionId = (): string =>
    'TXN-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();

/** Format a Date object to time string (e.g., "2:30 PM") */
export const formatTime = (date: Date): string =>
    date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

/** Format a Date object to date and time string */
export const formatDateTime = (date: Date): string =>
    date.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

/**
 * Convert Bengali numerals (০-৯) to English numerals (0-9)
 * Used for parsing user input that may contain Bengali digits
 * 
 * @example
 * bengaliToEnglish('০১৩১২৫৯৪২৯২') // '01312594292'
 * bengaliToEnglish('১০০') // '100'
 */
export const bengaliToEnglish = (str: string): string => {
    if (!str) return str;
    const bengaliNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    const englishNumerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let result = str.toString();
    bengaliNumerals.forEach((bengali, index) => {
        result = result.replace(new RegExp(bengali, 'g'), englishNumerals[index]);
    });
    return result;
};
