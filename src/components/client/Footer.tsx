"use client";

import { motion } from "framer-motion";
import { LuChevronUp } from "react-icons/lu";

import FooterTopHighlights from "./footer/FooterTopHighlights";
import FooterAbout from "./footer/FooterAbout";
import FooterLinks from "./footer/FooterLinks";
import FooterGallery from "./footer/FooterGallery";
import FooterBottomBar from "./footer/FooterBottomBar";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative bg-[#07192b] text-white border-t border-primary-light/30"
      aria-label="تذييل الصفحة"
    >
      <FooterTopHighlights />

      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-3 min-[360px]:px-5 sm:px-8 py-10 sm:py-16 relative">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="العودة لأعلى الصفحة"
          className="absolute -top-4 sm:-top-6 left-5 sm:left-10 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-linear-to-tr from-secondary to-[#e09831] text-primary flex items-center justify-center shadow-xl border-2 border-white/30 cursor-pointer z-20"
        >
          <LuChevronUp className="w-6 h-6 stroke-3" />
        </motion.button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10">
          <FooterAbout />
          <FooterLinks />
          {/* <FooterGallery /> */}
        </div>
      </div>

      <FooterBottomBar varient="dark" />
    </footer>
  );
}
