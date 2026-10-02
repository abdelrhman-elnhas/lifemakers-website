"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const digitVariants = {
  hidden: { opacity: 0, scale: 0.5, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function NotFoundContent() {
  return (
    <section
      className="relative min-h-[80dvh] flex items-center justify-center overflow-hidden bg-linear-to-b from-[#f8fafc] via-white to-[#f0f4f8]"
      aria-label="صفحة غير موجودة"
    >
      {/* ── Animated Background Elements ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,57,95,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(17,57,95,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs — soft pastel tones */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.45, 0.25],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 right-1/4 w-80 h-80 rounded-full bg-secondary/15 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.35, 0.15],
            x: [0, -20, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-sky blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-cream blur-[100px]"
        />

        {/* Animated floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 15, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/20"
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-8 max-w-2xl mx-auto py-12"
      >
        {/* Animated 404 Number */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          {["4", "0", "4"].map((digit, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={digitVariants}
              className="text-[clamp(5rem,20vw,12rem)] font-black leading-none select-none"
              style={{
                background:
                  "linear-gradient(135deg, #11395f 0%, #1d4e7d 40%, #2f8fd6 70%, #11395f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 4px 30px rgba(17, 57, 95, 0.15))",
              }}
            >
              {digit}
            </motion.span>
          ))}
        </div>

        {/* Animated line */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-6 sm:mb-8"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-0.5 w-12 sm:w-20 bg-linear-to-r from-transparent to-secondary origin-right"
          />
          <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="h-0.5 w-12 sm:w-20 bg-linear-to-l from-transparent to-secondary origin-left"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight"
        >
          الصفحة غير موجودة
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-text-body leading-relaxed mb-8 sm:mb-10 max-w-lg mx-auto font-medium"
        >
          عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
          <br className="hidden sm:block" />
          يمكنك العودة للصفحة الرئيسية أو تصفح أقسام الموقع.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto"
          >
            <Button
              asChild
              className="w-full sm:w-auto min-h-12 px-8 rounded-xl font-bold text-base bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 border-none"
              size="lg"
              id="not-found-home-btn"
            >
              <Link href="/">
                العودة للرئيسية
              </Link>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto"
          >
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto min-h-12 px-8 rounded-xl font-bold text-base text-primary border-2 border-primary/20 bg-white hover:bg-primary/5 hover:border-primary/40 transition-all inline-flex items-center justify-center gap-2 shadow-sm"
              size="lg"
              id="not-found-contact-btn"
            >
              <Link href="/contact">
                تواصل معنا
              </Link>
            </Button>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
