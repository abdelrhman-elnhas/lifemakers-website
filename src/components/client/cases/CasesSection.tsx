"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LuArrowLeft } from "react-icons/lu";
import CasesGrid from "./CasesGrid";

export default function CasesSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" dir="rtl">
      {/* Ambient backgrounds */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-between items-start lg:items-end mb-10 lg:mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl min-[400px]:text-4xl md:text-5xl font-bold text-primary mb-6"
            >
              حالات عاجلة
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 leading-relaxed font-medium"
            >
              حالات إنسانية تحتاج لتدخل سريع، كن سبباً في تفريج كربتهم.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block shrink-0"
          >
            <Button asChild variant="outline" className="rounded-full px-6 py-6 border-[#2f8fd6]/30 text-[#11395f] hover:bg-[#2f8fd6]/5 hover:border-[#2f8fd6] transition-all font-bold group">
              <Link href="/cases" className="flex items-center gap-2">
                كل الحالات
                <LuArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="mb-10">
          <CasesGrid limit={4} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 lg:hidden flex justify-center"
        >
          <Button asChild variant="outline" className="rounded-full px-8 py-6 w-full sm:w-auto border-[#2f8fd6]/30 text-[#11395f] hover:bg-[#2f8fd6]/5 hover:border-[#2f8fd6] transition-all font-bold group">
            <Link href="/cases" className="flex items-center justify-center gap-2">
              كل الحالات
              <LuArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
