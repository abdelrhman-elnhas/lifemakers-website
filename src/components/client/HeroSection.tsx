"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LuChevronDown } from "react-icons/lu";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen sm:min-h-[calc(100dvh-7rem)] flex flex-col justify-center overflow-hidden bg-[#0b223a] w-full"
      aria-label="القسم الرئيسي"
    >
      {/* ── Background Image with Motion Parallax & Multi-layer Overlay ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: imgY, scale: imgScale }}
          className="relative w-full h-[115%] top-[-7%]"
        >
          <Image
            src="/hero-img2.png"
            alt="صناع الحياة — دعم المحتاجين وبناء الأمل"
            fill
            priority
            className="object-cover object-[center_20%]"
            sizes="100vw"
          />
        </motion.div>
        {/* Navy gradient fading towards left */}
        <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-l from-[#11395f]/95 via-[#11395f]/85 md:via-[#11395f]/80 to-[#11395f]/25 z-1" />
        <div className="absolute inset-0 bg-primary/30 z-1" />

        {/* Ambient Animated Floating Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-24 right-1/4 w-72 h-72 rounded-full bg-secondary/20 blur-3xl pointer-events-none z-2"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.28, 0.15],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#2f8fd6]/20 blur-3xl pointer-events-none z-2"
        />
      </div>

      {/* ── Hero Main Content Block ── */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-3 min-[360px]:px-5 sm:px-10 lg:px-16 pt-8 min-[360px]:pt-12 sm:pt-16 pb-14 sm:pb-8 md:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-5">
            <div className="inline-flex items-center gap-1.5 min-[340px]:gap-2 bg-secondary/15 border border-secondary/40 text-secondary rounded-lg px-2.5 min-[340px]:px-3.5 py-1 min-[340px]:py-1.5 text-[10px] min-[340px]:text-xs sm:text-sm font-bold backdrop-blur-md max-w-full">
              <span className="truncate">جمعية مشهرة برقم 1622 لسنة 2012</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(1.5rem,7vw,3.5rem)] font-black text-white leading-[1.3] min-[360px]:leading-tight mb-4 sm:mb-5 tracking-tight"
          >
            <span className="text-white">صُنّاع الحياة… لأن كل بيت يستحق حياة كريمة</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-slate-200 text-[clamp(0.875rem,3vw,1.125rem)] leading-relaxed mb-6 sm:mb-8 max-w-xl font-normal"
          >جمعية خيرية في المحلة الكبرى، نعمل على توفير الدعم اللي محتاجه أهل بلدنا، بجهد فريق من المتطوعين وشراكة أهل الخير.
          </motion.p>

          {/* Call-to-action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col min-[380px]:flex-row items-stretch min-[380px]:items-center gap-2.5 min-[380px]:gap-4 mb-8 sm:mb-10 w-full"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="w-full min-[380px]:w-auto"
            >
              <Button
                asChild
                className="w-full min-[380px]:w-auto min-h-11 h-12 px-5 min-[380px]:px-8 rounded-xl font-black text-sm sm:text-base bg-secondary text-[#11395f] hover:bg-secondary hover:text-[#11395f] shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center border-none"
                size="lg"
                id="hero-donate-btn"
              >
                <Link href="https://wa.me/+201550550961" target="_blank">
                  تبرع الآن
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="w-full min-[380px]:w-auto"
            >
              <Button
                asChild
                variant="outline"
                className="w-full min-[380px]:w-auto min-h-11 h-12 px-4 min-[380px]:px-7 rounded-xl font-bold text-sm sm:text-base text-white border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white transition-all inline-flex items-center justify-center"
                size="lg"
                id="hero-about-btn"
              >
                <Link href="/about">
                  تعرف علينا
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll Down Indicator ── */}
      <motion.button
        animate={{
          y: [0, 8, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1, color: "#f1ad4a" }}
        className="hidden sm:flex absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 bg-transparent border-0 text-white/80 cursor-pointer transition-colors"
        aria-label="اسحب للأسفل"
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })}
        id="hero-scroll-btn"
      >
        <LuChevronDown className="w-5 h-5 text-secondary" />
        <span className="text-[11px] font-bold tracking-wider">اسحب للأسفل</span>
      </motion.button>
    </section>
  );
}
