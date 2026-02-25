export default function Loading() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
            <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full border-4 border-slate-200 border-t-indigo-600 animate-spin" />
                <p className="text-sm text-slate-500 font-medium">লোড হচ্ছে...</p>
            </div>
        </div>
    );
}
