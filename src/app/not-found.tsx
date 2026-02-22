import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="text-center">
                <p className="text-6xl font-black text-slate-200 mb-4">404</p>
                <p className="text-xl font-bold text-slate-600 mb-8">Page not found</p>
                <Link
                    href="/"
                    className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all"
                >
                    Back to Home
                </Link>
      </div>
    </div>
  );
}
