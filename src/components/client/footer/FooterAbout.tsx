"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaWhatsapp,
    label: "واتساب",
    href: "https://wa.me/+201550550961",
    color: "hover:bg-[#25D366] hover:border-[#25D366] text-white",
  },
  {
    icon: FaFacebookF,
    label: "فيسبوك",
    href: "https://facebook.com/Sonaa.Mahalla",
    color: "hover:bg-[#1877F2] hover:border-[#1877F2] text-white",
  },
  {
    icon: FaInstagram,
    label: "إنستغرام",
    href: "https://instagram.com/lifemakers.mahalla",
    color: "hover:bg-[#E4405F] hover:border-[#E4405F] text-white",
  },
];

export default function FooterAbout() {
  return (
    <div className="md:col-span-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Image
            src="/whitelogo.png"
            alt="شعار مؤسسة صناع الحياة"
            width={90}
            height={90}
            className="w-auto h-12 min-[340px]:h-14 object-contain brightness-105"
          />
        </div>

        <h3 className="text-[clamp(1.125rem,4vw,1.5rem)] font-black text-white mb-3">
          عن الجمعية
        </h3>

        <p className="text-slate-300 text-xs min-[340px]:text-sm leading-relaxed mb-6 max-w-md font-normal">
          مؤسسة صناع الحياة بالمحلة الكبرى جمعية أهلية مشهرة برقم 1622 لسنة 2012. نعمل على تنمية المجتمع وبناء مستقبل أفضل للأسر الأولى بالرعاية من خلال برامج التعليم، والصحة، والإطعام، وتوفير المأوى الكريم، وتمكين الشباب المتطوع.
        </p>
      </div>

      {/* Social Media Pill Badges */}
      <div>
        <p className="text-xs font-bold text-slate-300 mb-2.5">تابعنا على شبكات التواصل</p>
        <div className="flex flex-wrap items-center gap-2">
          {socialLinks.map(({ icon: Icon, label, href, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center justify-center gap-1.5 px-3 min-h-11 min-w-11 rounded-full bg-white/10 border border-white/15 text-xs font-medium transition-all ${color}`}
              aria-label={label}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
