"use client";

import { motion } from "framer-motion";
import teamsData from "@/data/teams.json";
import { type IconType } from "react-icons";
import {
  FaBullhorn,
  FaCamera,
  FaLaptopCode,
  FaHandshake,
  FaUsers,
  FaChartLine,
  FaSeedling,
  FaComments,
  FaServer,
} from "react-icons/fa6";
import { FaSearch, FaTools } from "react-icons/fa";

const iconMap: Record<string, IconType> = {
  FaBullhorn,
  FaCamera,
  FaLaptopCode,
  FaHandshake,
  FaUsers,
  FaChartLine,
  FaSeedling,
  FaComments,
  FaSearch,
  FaTools,
  FaServer,
};

export default function TeamsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(1.875rem,5vw,3rem)] font-bold text-primary mb-6"
          >
            فرق العمل
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            نعمل كفريق واحد من خلال إدارات متخصصة لضمان تقديم أفضل الخدمات وتحقيق أهداف المؤسسة بكفاءة وفعالية.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {teamsData.map((team) => {
            const Icon = iconMap[team.icon];
            return (
              <motion.div
                key={team.id}
                variants={itemVariants}
                className="group relative bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover Background Glow */}
                <div className={`absolute -inset-2 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${team.bg.replace('/10', '')}`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${team.bg} ${team.color}`}>
                    {Icon && <Icon className="w-7 h-7" />}
                  </div>
                  <h3 className="text-[clamp(1.25rem,4vw,1.5rem)] font-bold text-primary mb-3">{team.name}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {team.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
