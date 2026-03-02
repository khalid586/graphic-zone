/**
 * Shared error fallback component.
 *
 * Used by both the global error boundary and route-level error pages.
 */

'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { logError } from '@/lib/logger';

type ErrorFallbackProps = {
    /** The caught error */
    readonly error: Error & { digest?: string };
    /** Next.js reset function to retry rendering */
    readonly reset: () => void;
    /** Where the error originated (for logging) */
    readonly source: string;
    /** Optional custom heading */
    readonly heading?: string;
    /** Optional custom body text */
    readonly body?: string;
}

const ErrorFallback = ({
    error,
    reset,
    source,
    heading = 'কিছু একটা ভুল হয়েছে',
    body = 'দুঃখিত, একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
}: ErrorFallbackProps) => {
    useEffect(() => {
        logError(error, 'error', {
            source,
            meta: { digest: error.digest },
        });
    }, [error, source]);

    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 p-6">
            <div className="text-center max-w-md">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-100 flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{heading}</h2>
                <p className="text-sm text-slate-500 mb-8">{body}</p>
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={reset}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all"
                    >
                        আবার চেষ্টা করুন
                    </button>
                    <Link
                        href="/"
                        className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-all"
                    >
                        হোমে ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
    );
};

export { ErrorFallback };


