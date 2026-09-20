"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";

const galleryImages = [
  { src: "/images/1.jpg", alt: "مشروع إيواء الأسر المستحقة" },
  { src: "/images/2.jpg", alt: "توزيع المساعدات والوجبات" },
  { src: "/images/3.png", alt: "قوافل طبية متكاملة" },
  { src: "/images/4.png", alt: "دعم تعليم الأطفال وتمكينهم" },
  { src: "/hero-bg.jpg", alt: "ابتسامة أمل وبناء المستقبل" },
  { src: "/images/1.jpg", alt: "فريق متطوعي صناع الحياة" },
];

export default function FooterGallery() {
  return (
    <div className="md:col-span-3">
      <h3 className="text-lg min-[340px]:text-xl font-black text-white mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-secondary">
        الصور والفيديوهات
      </h3>

      <div className="grid grid-cols-3 gap-2">
        {galleryImages.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.2 }}
            className="relative aspect-square rounded-lg overflow-hidden border border-white/10 group cursor-pointer bg-slate-800 shadow-md"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="120px"
            />
            <div className="absolute inset-0 bg-[#11395f]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <LuExternalLink className="w-4 h-4 text-white" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
