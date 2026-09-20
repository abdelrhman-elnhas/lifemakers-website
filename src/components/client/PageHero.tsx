"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  description?: string | ReactNode;
  badgeText?: string;
  imageSrc: string;
}

export default function PageHero({ title, description, badgeText, imageSrc }: PageHeroProps) {
  return (
    <section className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 flex items-center justify-center min-h-[80vh] sm:min-h-screen overflow-hidden w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Primary Overlay */}
        <div className="absolute inset-0 bg-primary/85 z-10" />
        {/* Fade into body background */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-50 to-transparent z-20" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-30 text-center mt-8">
        {badgeText && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-5 py-2.5 text-sm font-bold mb-8 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            {badgeText}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2rem,7vw,4.5rem)] font-bold text-white mb-6 tracking-tight drop-shadow-lg px-2"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-8 shadow-lg"
        />

        {description && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto text-[clamp(1rem,3vw,1.5rem)] text-white/95 leading-relaxed font-medium drop-shadow-md px-4"
          >
            {description}
          </motion.div>
        )}
      </div>
    </section>
  );
}
