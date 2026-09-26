"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LuX, LuChevronRight, LuChevronLeft } from "react-icons/lu";
import { AchievementData } from "@/types/achievements";



interface AchievementModalProps {
  achievement: AchievementData;
  onClose: () => void;
}

export default function AchievementModal({ achievement, onClose }: AchievementModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === achievement.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? achievement.images.length - 1 : prev - 1));
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance) {
      nextImage();
    } else if (distance < -minSwipeDistance) {
      prevImage();
    }
  };


  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-md" />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl flex flex-col md:flex-row z-10"
          onClick={(e) => e.stopPropagation()}
          dir="rtl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-50 bg-white/80 backdrop-blur-sm text-primary hover:bg-white hover:text-red-500 rounded-full min-w-11 min-h-11 flex items-center justify-center transition-colors shadow-sm"
          >
            <LuX className="w-5 h-5" />
          </button>

          {/* Carousel Section */}
          <div
            className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-125 bg-slate-100 shrink-0 group"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={achievement.images?.[currentImageIndex] ?? "/logo.png"}
                  alt={`${achievement.title} - صورة ${currentImageIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            {achievement.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-md hover:bg-white text-primary rounded-full min-w-11 min-h-11 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md"
                  aria-label="الصورة السابقة"
                >
                  <LuChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-md hover:bg-white text-primary rounded-full min-w-11 min-h-11 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md"
                  aria-label="الصورة التالية"
                >
                  <LuChevronLeft className="w-5 h-5" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-20">
                  {achievement.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className="w-11 h-11 flex items-center justify-center focus:outline-none"
                    >
                      <span className={`transition-all duration-300 rounded-full ${currentImageIndex === idx
                        ? "w-6 h-2 bg-secondary"
                        : "w-2 h-2 bg-white/60 hover:bg-white/90"
                        }`} />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content Section */}
          <div className="p-8 sm:p-10 w-full md:w-1/2 flex flex-col justify-center bg-white relative">
            <div className="absolute top-0 right-10 w-16 h-1.5 bg-linear-to-l from-secondary to-[#e09831] -translate-y-1/2 rounded-full hidden md:block" />

            <div className="inline-flex items-center gap-2 bg-[#2f8fd6]/10 text-primary rounded-full px-4 py-1.5 text-sm font-bold mb-6 w-fit border border-[#2f8fd6]/20">
              {achievement.date}
            </div>

            <h2 className="text-[clamp(1.5rem,5vw,1.875rem)] font-bold text-primary mb-6 leading-snug">
              {achievement.title}
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              {achievement.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
