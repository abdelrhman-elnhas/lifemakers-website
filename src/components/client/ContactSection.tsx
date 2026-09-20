"use client";

import { motion, type Variants } from "framer-motion";
import ContactMap from "./contact/ContactMap";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-slate-50 pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden w-full"
      aria-label="قسم تواصل معنا"
    >
      <ContactMap />

      <div className="relative z-10 max-w-6xl mx-auto px-2.5 min-[360px]:px-4 sm:px-6 mt-12 sm:mt-16">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative min-h-[70vh] flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-linear-to-br from-primary via-primary-hover to-[#0a2138] text-white shadow-2xl border border-white/10"
        >
          {/* Decorative ambient orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 relative z-10">
            <ContactInfo />

            <div className="lg:col-span-7 p-5 min-[360px]:p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
