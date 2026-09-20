"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AchievementModal from "./AchievementModal";
import AchievementsGridSkeleton from "./AchievementsGridSkeleton";
import { AchievementData } from "@/types/achievements";
import { useAchievements } from "@/hooks/useAchievements";

interface AchievementsGridProps {
    achievements?: AchievementData[];
    layoutType?: "page" | "section";
}

export default function AchievementsGrid({ achievements: propAchievements, layoutType = "page" }: AchievementsGridProps) {
    const { data: fetchedAchievements = [], isLoading } = useAchievements();
    const achievements = propAchievements || fetchedAchievements;
    const displayAchievements = layoutType === "section" ? achievements.slice(0, 3) : achievements;

    const [selectedAchievement, setSelectedAchievement] = useState<AchievementData | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!propAchievements && isLoading) {
        return <AchievementsGridSkeleton layoutType={layoutType} />;
    }

    return (
        <>
            <div className={layoutType === "page" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"}>
                {displayAchievements.map((achievement, index) => (
                    <motion.div
                        key={achievement.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: layoutType === "page" ? "-100px" : "0px" }}
                        transition={{ duration: 0.5, delay: layoutType === "page" ? (index % 3) * 0.15 : index * 0.1 }}
                        whileHover={{ y: layoutType === "page" ? -8 : -5 }}
                        onClick={() => setSelectedAchievement(achievement)}
                        className={`group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-[#2f8fd6]/10 transition-all duration-300 flex flex-col cursor-pointer`}
                    >
                        <div className={`relative w-full overflow-hidden bg-slate-100 shrink-0 ${layoutType === "page" ? 'h-64 sm:h-72' : 'h-56 sm:h-64'}`}>
                            <Image
                                src={achievement.images?.[currentImageIndex] ?? "/logo.png"} alt={achievement.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={`object-cover transition-transform duration-700 ${layoutType === "page" ? 'group-hover:scale-110 group-hover:rotate-1' : 'group-hover:scale-105'}`}
                            />
                            <div className={`absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#11395f] font-extrabold px-5 py-2 rounded-full shadow-lg text-sm z-10 border border-slate-100/50`}>
                                {achievement.date}
                            </div>
                            {/* Gradient overlays */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-0 opacity-60 group-hover:opacity-80 transition-opacity" />
                            {layoutType === "page" && (
                                <div className="absolute inset-0 bg-[#2f8fd6]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                            )}
                        </div>

                        <div className={`p-8 relative grow flex flex-col bg-white`}>
                            <div className={`absolute top-0 right-10 w-16 h-1.5 bg-linear-to-l from-secondary to-[#e09831] -translate-y-1/2 rounded-full`} />
                            <h3 className={`font-bold text-[#11395f] leading-snug line-clamp-3 transition-colors mt-2 ${layoutType === "page" ? 'text-[clamp(1.25rem,4vw,1.5rem)] group-hover:text-[#2f8fd6]' : 'text-xl'}`}>
                                {achievement.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedAchievement && (
                <AchievementModal
                    achievement={selectedAchievement}
                    onClose={() => setSelectedAchievement(null)}
                />
            )}
        </>
    );
}