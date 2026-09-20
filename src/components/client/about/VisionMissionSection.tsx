"use client";

import { motion, type Variants } from "framer-motion";
import aboutData from "@/data/about.json";
import { FaEye, FaBullseye } from "react-icons/fa6";

export default function VisionMissionSection() {
  const { vision, mission } = aboutData;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" aria-label="رؤيتنا ورسالتنا">
      <div className="absolute top-1/2 left-0 w-125 h-125 bg-[#2f8fd6]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-125 h-125 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Vision */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#2f8fd6] to-primary rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative p-8 sm:p-10 bg-white rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-start overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#2f8fd6] to-primary" />
              <div className="w-16 h-16 rounded-2xl bg-[#2f8fd6]/10 flex items-center justify-center text-[#2f8fd6] mb-6 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <FaEye className="w-8 h-8" />
              </div>
              <h3 className="text-[clamp(1.5rem,5vw,1.875rem)] font-bold text-primary mb-4">{vision.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {vision.description}
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-secondary to-[#d99026] rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative p-8 sm:p-10 bg-white rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-start overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-secondary to-[#d99026]" />
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <FaBullseye className="w-8 h-8" />
              </div>
              <h3 className="text-[clamp(1.5rem,5vw,1.875rem)] font-bold text-primary mb-4">{mission.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {mission.description}
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
