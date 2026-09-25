"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-8 sm:bottom-8 sm:left-24 z-50">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
        className="relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-full ml-4 bg-white text-slate-800 text-sm font-bold py-2.5 px-4 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.1)] whitespace-nowrap pointer-events-none hidden sm:block border border-slate-100"
        >
          تواصل معنا
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-l border-b border-slate-100" />
        </motion.div>

        {/* Button */}
        <Link
          href={`https://wa.me/201550550961?text="السلام عليكم و رحمة الله و بركاته ، حابب أسال عن خدماتكم"`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل معنا عبر واتساب"
          className="relative flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 bg-linear-to-tr from-[#128C7E] to-[#25D366] text-white rounded-full shadow-xl hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 group"
        >
          {/* Constant subtle pulse */}
          <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-60"></span>

          <FaWhatsapp className="w-4 h-4 sm:w-6 sm:h-6 relative z-10" />
        </Link>
      </motion.div>
    </div>
  );
}
