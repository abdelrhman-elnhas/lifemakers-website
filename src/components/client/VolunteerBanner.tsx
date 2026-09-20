"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LuHeartHandshake, LuArrowLeft } from "react-icons/lu";

export default function VolunteerBanner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary via-primary-hover to-[#0a2138]" dir="rtl" aria-label="بانر التطوع">
      {/* Ambient Backgrounds */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2f8fd6]/15 rounded-full blur-3xl pointer-events-none -ml-40 -mb-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 py-16 flex flex-col items-center justify-center text-center border-t border-b border-white/5">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10 shadow-inner"
        >
          <LuHeartHandshake className="w-10 h-10 sm:w-12 sm:h-12 text-secondary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(1.875rem,6vw,3.75rem)] font-bold text-white mb-6 leading-tight tracking-tight"
        >
          عايز تكون <span className="text-secondary">صانع حياة؟</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[clamp(1rem,3vw,1.5rem)] text-slate-300 mb-10 max-w-3xl leading-relaxed font-medium px-2"
        >
          انضم لفريقنا، عندنا مكان لأي مهارة عندك — تسويق، تصوير، تصميم، تنظيم، أو حتى وقتك وجهدك.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full min-[400px]:w-auto px-4 min-[400px]:px-0"
        >
          <Button asChild className="w-full min-[400px]:w-auto rounded-lg px-6 py-6 sm:px-10 sm:py-8 bg-secondary text-primary hover:bg-secondary-hover transition-all font-bold text-base sm:text-xl group shadow-xl shadow-secondary/20 hover:shadow-2xl hover:shadow-secondary/30">
            <Link href="/volunteer" className="flex items-center justify-center gap-3">
              قدم للتطوع معانا
              <LuArrowLeft className="w-5 h-5 sm:w-7 sm:h-7 group-hover:-translate-x-1.5 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
