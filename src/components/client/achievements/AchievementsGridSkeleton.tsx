export default function AchievementsGridSkeleton({ layoutType = "page" }: { layoutType?: "page" | "section" }) {
    const itemsCount = layoutType === "section" ? 3 : 6;
    
    return (
        <div className={layoutType === "page" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"}>
            {Array.from({ length: itemsCount }).map((_, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
                    {/* Image skeleton */}
                    <div className={`w-full bg-slate-200 animate-pulse ${layoutType === "page" ? 'h-64 sm:h-72' : 'h-56 sm:h-64'}`} />
                    
                    {/* Content skeleton */}
                    <div className="p-8 grow flex flex-col bg-white">
                        <div className="w-16 h-1.5 bg-slate-200 rounded-full mb-4 animate-pulse" />
                        <div className="w-3/4 h-6 bg-slate-200 rounded-md mb-2 animate-pulse" />
                        <div className="w-1/2 h-6 bg-slate-200 rounded-md animate-pulse" />
                    </div>
                </div>
            ))}
        </div>
    );
}
