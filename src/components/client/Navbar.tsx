"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import navLinks from "@/data/navlinks.json";
import { LuMenu, LuX, LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Top Info Bar ── */}
      <div className="bg-[#11395f] text-white text-[11px] min-[380px]:text-xs sm:text-[13px] relative z-50 border-b border-white/10 w-full overflow-hidden min-[499px]:block hidden z-100">
        <div className="max-w-7xl mx-auto px-2 min-[340px]:px-3 sm:px-6 sm:h-10 flex items-center justify-between gap-1.5 sm:gap-4 flex-wrap">
          {/* Contacts */}
          <div className="flex items-center gap-2 min-[360px]:gap-3 sm:gap-6 flex-wrap text-[11px] min-[380px]:text-xs font-medium">
            <a
              href="mailto:info@lifemakers-mahalla.org"
              className="flex items-center justify-center gap-1.5 text-white/90 hover:text-secondary transition-colors shrink-0 min-w-11 px-1"
              title="البريد الإلكتروني"
              aria-label="البريد الإلكتروني"
            >
              <LuMail className="w-4 h-4 text-secondary shrink-0" />
              <span className="hidden min-[340px]:inline">info@lifemakers-mahalla.org</span>
            </a>
            <a
              href="tel:+201550550961"
              className="flex items-center justify-center gap-1.5 text-white/90 hover:text-secondary transition-colors shrink-0 min-w-11 px-1"
              title="اتصل بنا: 01550550961"
              aria-label="اتصل بنا: 01550550961"
            >
              <LuPhone className="w-4 h-4 text-secondary shrink-0" />
              <span dir="ltr" className="font-sans text-[11px] min-[380px]:text-xs">
                +20 155 055 0961
              </span>
            </a>
            <span className="hidden lg:flex items-center gap-1.5 text-white/80 font-medium">
              <LuMapPin className="w-4 h-4 text-secondary" />
              <span>2 ش. محمد الفاتح متفرع من ش. علي الشيشيني - المحلة الكبرى</span>
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center shrink-0">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://wa.me/+201550550961"
              target="_blank"
              rel="noreferrer"
              className="min-w-11 min-h-11 flex items-center justify-center group"
              aria-label="واتساب"
            >
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-secondary group-hover:text-[#11395f] transition-all">
                <FaWhatsapp className="w-3.5 h-3.5" />
              </span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://facebook.com/Sonaa.Mahalla"
              target="_blank"
              rel="noreferrer"
              className="min-w-11 min-h-11 flex items-center justify-center group"
              aria-label="فيسبوك"
            >
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-secondary group-hover:text-[#11395f] transition-all">
                <FaFacebookF className="w-3.5 h-3.5" />
              </span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://instagram.com/lifemakers.mahalla"
              target="_blank"
              rel="noreferrer"
              className="hidden min-[280px]:flex min-w-11 min-h-11 items-center justify-center group"
              aria-label="إنستغرام"
            >
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-secondary group-hover:text-[#11395f] transition-all">
                <FaInstagram className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <motion.header
        initial={false}
        animate={{
          boxShadow: isScrolled
            ? "0 4px 20px -2px rgba(17, 57, 95, 0.12)"
            : "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
          paddingTop: isScrolled ? "4px" : "8px",
          paddingBottom: isScrolled ? "4px" : "8px",
        }}
        transition={{ duration: 0.25 }}
        className="sticky top-0 inset-x-0 z-100 bg-white/95 backdrop-blur-md border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-2 min-[340px]:px-4 sm:px-6 flex items-center justify-between gap-2 h- min-[360px]:h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Image
                src="/logo.png"
                alt="صُنّاع الحياة"
                width={100}
                height={100}
                priority
                className="w-auto h-8 min-[320px]:h-10 min-[400px]:h-12 sm:h-16 max-w-30 min-[360px]:max-w-40 object-contain transition-transform"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" dir="rtl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.label}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "px-3.5 py-2 rounded-full font-bold text-sm sm:text-[15px] transition-all duration-200 whitespace-nowrap inline-block",
                      isActive
                        ? "bg-secondary/15 text-[#11395f]"
                        : "text-[#11395f] hover:bg-secondary/10 hover:text-[#11395f]"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Actions: CTA & Mobile Toggle */}
          <div className="flex items-center gap-1.5 min-[340px]:gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-2 lg:gap-3">
              <motion.div
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button
                  asChild
                  className="w-full justify-center bg-transparent hover:bg-primary/5 border-2 border-primary text-[#11395f] font-extrabold rounded-lg px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm shadow-sm transition-all"
                >
                  <Link href="/volunteer">
                    تطوع معنا
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button
                  asChild
                  className="bg-linear-to-r from-secondary to-[#e09831] text-[#11395f] font-extrabold rounded-lg px-4 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm shadow-md hover:shadow-lg transition-all border-2 border-secondary/90"
                >
                  <Link href="https://wa.me/+201550550961" target="_blank">
                    تبرع الآن
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden min-w-11 min-h-11 flex items-center justify-center rounded-lg text-[#11395f] hover:bg-slate-100 transition-colors border border-slate-200 shrink-0"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="القائمة"
              id="navbar-mobile-btn"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <LuX className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <LuMenu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-b border-slate-200"
            >
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.02, staggerDirection: -1 },
                  },
                }}
                className="p-3 sm:p-4 flex flex-col gap-1"
                dir="rtl"
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.label}
                      variants={{
                        open: { y: 0, opacity: 1 },
                        closed: { y: -8, opacity: 0 },
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center min-h-11 px-4 rounded-lg font-bold text-[15px] text-[#11395f] hover:bg-slate-50 hover:text-secondary transition-colors",
                          isActive && "bg-secondary/10 text-secondary"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: -8, opacity: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3"
                >
                  <Button
                    asChild
                    className="w-full justify-center bg-transparent hover:bg-primary/5 border-2 border-primary text-[#11395f] font-extrabold rounded-lg py-5 text-xs min-[340px]:text-sm shadow-sm"
                  >
                    <Link
                      href="/volunteer"
                      onClick={() => setMobileOpen(false)}
                    >
                      تطوع معنا
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full justify-center bg-linear-to-r from-secondary to-[#e09831] text-[#11395f] font-extrabold rounded-lg py-5 text-xs min-[340px]:text-sm shadow-md border-2 border-secondary/90"
                  >
                    <Link
                      href="https://wa.me/+201550550961"
                      target="_blank"
                      onClick={() => setMobileOpen(false)}
                    >
                      تبرع الآن
                    </Link>
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
