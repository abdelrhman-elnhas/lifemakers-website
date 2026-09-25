"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import atharData from "@/data/athar.json";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

export default function AtharSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-primary relative overflow-hidden" id="athar">
      {/* Premium Dark Theme Background Elements */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-blue-500/20 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3 opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-20 max-w-7xl mx-auto">

          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex justify-center lg:justify-start"
          >
            <div className="relative group w-full max-w-55 sm:max-w-70 md:max-w-[320px] lg:max-w-100">
              <div className="absolute inset-0 bg-white/20 blur-2xl sm:blur-3xl rounded-full scale-110 group-hover:bg-white/30 transition-all duration-700" />
              <div className="bg-white/95 backdrop-blur-md p-6 sm:p-10 md:p-14 rounded-3xl sm:rounded-[3rem] shadow-[0_0_80px_rgba(255,255,255,0.15)] relative w-full aspect-square flex flex-col justify-center items-center border border-white/40 group-hover:scale-105 transition-transform duration-700">
                <Image
                  src="/athar.png"
                  alt={atharData.heading}
                  width={320}
                  height={320}
                  className="w-full h-auto object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text & CTAs */}
          <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="w-full"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg tracking-tight wrap-break">
                {atharData.hook}
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mb-10 sm:mb-12 font-medium max-w-2xl mx-auto lg:mx-0">
                {atharData.intro}
              </p>

              {/* Impact Note */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_0_40px_rgba(241,173,74,0.15)] flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 w-full group hover:bg-white/15 hover:border-secondary/50 transition-all duration-300 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 text-center sm:text-right">
                <div className="bg-secondary/20 p-2.5 sm:p-3 rounded-full shrink-0 group-hover:scale-110 transition-transform duration-300 border border-secondary/30">
                  <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>
                <div className="flex flex-col justify-center sm:mt-1">
                  <span className="font-bold text-xs sm:text-sm md:text-base leading-relaxed tracking-wide">
                    {atharData.impactNote}
                  </span>
                </div>
              </div>

              {/* Instagram Link-Out */}
              <div className="flex justify-center lg:justify-start">
                <Link
                  href={atharData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-[#e09e36] text-primary py-3 px-4 sm:px-6 rounded-lg font-bold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto text-xs sm:text-sm md:text-base"
                >
                  <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="font-bold tracking-wide wrap-break">
                    تابعنا على انستجرام
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
