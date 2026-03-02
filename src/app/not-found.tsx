import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
                <p className="text-6xl font-black text-muted mb-4">404</p>
                <p className="text-xl font-bold text-muted-foreground mb-8">পৃষ্ঠা খুঁজে পাওয়া যায়নি</p>
                <Link
                    href="/"
                    className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all"
                >
                    হোমে ফিরে যান
                </Link>
            </div>
        </div>
    );
}
