export default function ProjectLoading() {
    return (
        <div className="bg-white text-slate-900">
            {/* Hero skeleton */}
            <div className="relative w-full h-[50vh] bg-slate-200 animate-pulse" />

            {/* Content skeleton */}
            <div className="px-6 sm:px-8 py-12 md:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-[1fr_360px] gap-12 xl:gap-20">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="h-4 w-32 bg-slate-200 rounded animate-pulse" />
                                <div className="h-8 w-3/4 bg-slate-200 rounded animate-pulse" />
                                <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
                                <div className="h-4 w-5/6 bg-slate-100 rounded animate-pulse" />
                            </div>
                            {/* Gallery skeleton */}
                            <div className="grid grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="aspect-[4/3] bg-slate-200 rounded-2xl animate-pulse" />
                                ))}
                            </div>
                        </div>
                        {/* Sidebar skeleton */}
                        <div className="hidden lg:block">
                            <div className="space-y-6">
                                <div className="h-80 bg-slate-200 rounded-3xl animate-pulse" />
                                <div className="h-24 bg-slate-100 rounded-3xl animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
