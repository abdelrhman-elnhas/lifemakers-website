"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { type IconType } from "react-icons";
import { LuUsers, LuBuilding2 } from "react-icons/lu";
import { FaHandHoldingHeart, FaCalendarDays } from "react-icons/fa6";
import { usePathname } from "next/navigation";

import aboutData from "@/data/about.json";

const iconMap: Record<string, IconType> = {
  LuUsers,
  FaHandHoldingHeart,
  LuBuilding2,
  FaCalendarDays,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutSection() {
  const pathname = usePathname();

  return (
    <section className="relative py-16 md:py-24 bg-slate-100 overflow-hidden w-full" aria-label="عن المؤسسة">
      {/* Decorative ambient orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2f8fd6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-1.5 min-[340px]:gap-2 bg-[#2f8fd6]/10 border border-[#2f8fd6]/20 text-primary rounded-full px-2.5 min-[340px]:px-3.5 py-1 min-[340px]:py-1.5 text-[10px] min-[340px]:text-xs sm:text-sm font-bold backdrop-blur-md max-w-full">
                {/* <span className="w-1.5 h-1.5 min-[340px]:w-2 min-[340px]:h-2 rounded-full bg-[#f1ad4a] animate-pulse shrink-0" /> */}
                <span className="truncate">عن الجمعية</span>
              </div>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl min-[400px]:text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              نصنع الحياة..<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-[#2a5f90] py-4">
                ونبني مستقبل الإنسان
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              صُنّاع الحياة جمعية خيرية أهلية مقرها المحلة الكبرى، قائمة على
              الجهد التطوعي الكامل من خلال عدد من الإدارات والفرق الداخلية،
              وتهدف إلى دعم الأسر المستحقة من خلال مشروعات خيرية وتنموية
              مستدامة، و مساعدات موسمية على مدار العام.
            </motion.p>

            {pathname !== '/about' && (
              <motion.div variants={itemVariants}>
                <Link
                  href='/about'
                  className="inline-flex px-6 sm:px-8 py-3.5 sm:py-4 bg-secondary text-primary rounded-xl font-bold hover:bg-[#e09e36] transition-all duration-300 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 active:scale-95 items-center gap-2 text-sm sm:text-base"
                >
                  تعرف علينا أكثر
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 min-[450px]:grid-cols-2 gap-4 sm:gap-6"
          >
            {aboutData.stats.map((stat) => {
              const Icon = iconMap[stat.icon];
              return (
                <motion.div
                  key={stat.id}
                  variants={itemVariants}
                  className="relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 bg-linear-to-br from-primary via-primary to-[#0a2138] shadow-2xl hover:shadow-[#2f8fd6]/20 hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 transition-transform duration-500 group-hover:scale-150 pointer-events-none" />

                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 relative z-10">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      {stat.value}
                    </h3>
                    <p className="text-gray-300 font-medium text-sm sm:text-base">
                      {stat.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
