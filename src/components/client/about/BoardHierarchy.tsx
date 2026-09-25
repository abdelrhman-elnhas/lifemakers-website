"use client";

import { motion } from "framer-motion";
import boardData from "@/data/board.json";
import Image from "next/image";

export default function BoardHierarchy() {
  const layer0 = boardData.filter(m => m.id === "1");
  const layer1 = boardData.filter(m => m.id === "2" || m.id === "3");
  const layer2 = boardData.filter(m => m.id === "4");
  const layer3 = boardData.filter(m => !["1", "2", "3", "4"].includes(m.id));

  const MemberCard = ({ member }: { member: { name: string, role: string, image: string } }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100 flex flex-col items-center text-center relative z-10 hover:shadow-xl transition-all w-[min(100%,12rem)] sm:w-56"
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-3 sm:mb-4 border-4 border-[#2f8fd6]/10 bg-slate-50 flex items-center justify-center shrink-0">
        <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover w-full h-full"></Image>
      </div>
      <h4 className="text-base sm:text-lg font-bold text-primary mb-1 line-clamp-1">{member.name}</h4>
      <p className="text-xs sm:text-sm font-semibold text-secondary line-clamp-1">{member.role}</p>
    </motion.div>
  );

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-200 h-200 bg-secondary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,6vw,3.75rem)] font-bold text-primary mb-6"
          >
            الهيكل التنظيمي
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-linear-to-r from-primary to-primary-hover mx-auto rounded-full"
          />
        </div>

        <div className="flex flex-col gap-10 sm:gap-14">
          {/* LAYER 0 */}
          {layer0.length > 0 && (
            <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
              {layer0.map(m => (
                <motion.div key={m.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <MemberCard member={m} />
                </motion.div>
              ))}
            </div>
          )}

          {/* LAYER 1 */}
          {layer1.length > 0 && (
            <div className="flex justify-center flex-wrap gap-6 sm:gap-12 md:gap-24">
              {layer1.map(m => (
                <motion.div key={m.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <MemberCard member={m} />
                </motion.div>
              ))}
            </div>
          )}

          {/* LAYER 2 */}
          {layer2.length > 0 && (
            <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
              {layer2.map(m => (
                <motion.div key={m.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <MemberCard member={m} />
                </motion.div>
              ))}
            </div>
          )}

          {/* LAYER 3 */}
          {layer3.length > 0 && (
            <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
              {layer3.map(m => (
                <motion.div key={m.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <MemberCard member={m} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
