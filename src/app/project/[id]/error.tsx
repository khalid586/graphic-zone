'use client';

import { ErrorFallback } from '@/components/ui/ErrorFallback';

export default function ProjectError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <ErrorFallback
            error={error}
            reset={reset}
            source="ProjectErrorBoundary"
            heading="প্রকল্প লোড করতে সমস্যা হয়েছে"
            body="অনুগ্রহ করে আবার চেষ্টা করুন।"
        />
    );
}
