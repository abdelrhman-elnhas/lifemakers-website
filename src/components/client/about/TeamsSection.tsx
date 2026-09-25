"use client";

import { motion } from "framer-motion";
import teamsData from "@/data/teams.json";
import { useState } from "react";
import Link from "next/link";
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
  FaUserTie,
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
  const [selectedTeam, setSelectedTeam] = useState<typeof teamsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                onClick={() => {
                  setSelectedTeam(team);
                  setIsModalOpen(true);
                }}
                className="group relative bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Hover Background Glow */}
                <div className={`absolute -inset-2 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${team.bg.replace('/10', '')}`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${team.bg} ${team.color}`}>
                    {Icon && <Icon className="w-7 h-7" />}
                  </div>
                  <h3 className="text-[clamp(1.25rem,4vw,1.5rem)] font-bold text-primary mb-2">{team.name}</h3>
                  {team.leader && (
                    <p className="inline-flex items-center gap-1.5 border border-slate-200 bg-slate-50 rounded-full px-3 py-1 text-xs font-medium text-slate-500 mb-3">
                      <FaUserTie className="w-3 h-3 text-slate-400" />
                      {team.leader}
                    </p>
                  )}

                  <p className="text-slate-600 leading-relaxed line-clamp-3">
                    {team.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal for full details */}
      {isModalOpen && selectedTeam && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className={`relative p-6 sm:p-8 flex items-start sm:items-center justify-between ${selectedTeam.bg.replace('/10', '/30')}`}>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl flex items-center justify-center bg-white shadow-sm ${selectedTeam.color}`}>
                  {(() => {
                    const ModalIcon = iconMap[selectedTeam.icon];
                    return ModalIcon ? <ModalIcon className="w-7 h-7 sm:w-8 sm:h-8" /> : null;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{selectedTeam.name}</h3>
                  {selectedTeam.leader && (
                    <p className="inline-flex items-center gap-1.5 border border-slate-200 bg-slate-50 rounded-full px-3 py-1 text-xs font-medium text-slate-500 mb-3">
                      <FaUserTie className="w-3 h-3 text-slate-400" />
                      {selectedTeam.leader}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-white/50 hover:bg-white text-slate-700 rounded-full p-2 shrink-0 min-w-10 min-h-10 flex items-center justify-center backdrop-blur-md transition-colors focus:outline-none shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 bg-white flex flex-col gap-6">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">مهام الفريق</h4>
                <p className="text-slate-600 leading-relaxed text-base whitespace-pre-wrap">
                  {selectedTeam.description}
                  {"\n"}
                  {selectedTeam.detailed}
                </p>
              </div>

              <Link
                href={`/volunteer?team=${encodeURIComponent(selectedTeam.name)}`}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-primary/30 shrink-0 mt-2"
              >
                <span>اتطوع معانا في الفريق</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
