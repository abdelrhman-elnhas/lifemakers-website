"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div className="lg:col-span-5 p-5 min-[360px]:p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-l border-white/10">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="/hero-bg.jpg"
          alt="متطوعو صناع الحياة"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#11395f] via-[#11395f]/90 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 text-secondary rounded-full px-3 py-1 text-xs font-bold mb-4 sm:mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span>تواصل معنا</span>
        </div> */}

        <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] font-black leading-tight text-white mb-4">
          عايز <span className="text-secondary">تتواصل معانا؟</span>
        </h2>

        <p className="text-slate-300 text-[clamp(0.75rem,2vw,1rem)] leading-relaxed mb-6 font-normal">
          لا تتردد في التواصل معنا، وسيقوم فريق صناع الحياة بالرد عليك في أسرع وقت للإجابة على جميع استفساراتك أو تنسيق مساهمتك وتطوعك.
        </p>
      </div>

      <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col min-[340px]:flex-row gap-2.5">
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="https://wa.me/+201550550961"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-emerald-300 rounded-xl py-2.5 px-3 min-h-11 text-xs sm:text-sm font-bold transition-all"
        >
          <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
          <span>واتساب مباشر</span>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="tel:+201550550961"
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-xl py-2.5 px-3 min-h-11 text-xs sm:text-sm font-bold transition-all"
        >
          <LuPhone className="w-4 h-4 text-secondary" />
          <span>اتصال هاتفي</span>
        </motion.a>
      </div>
    </div>
  );
}
