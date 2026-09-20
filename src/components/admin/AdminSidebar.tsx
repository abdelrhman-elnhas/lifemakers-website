"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    LuLayoutDashboard,
    LuTrophy,
    LuHeart,
    LuX,
    LuGlobe,
    LuPersonStanding,
    LuMail
} from "react-icons/lu";
import { cn } from "@/lib/utils";

const links = [
    { name: "لوحة التحكم", href: "/admin", icon: LuLayoutDashboard },
    { name: "الإنجازات", href: "/admin/achievements", icon: LuTrophy },
    { name: "الحالات", href: "/admin/cases", icon: LuPersonStanding },
    { name: "فورم التطوع", href: "/admin/volunteer", icon: LuHeart },
    { name: "الرسائل", href: "/admin/contact", icon: LuMail },
    { name: "الذهاب للموقع", href: "/", icon: LuGlobe },
];

const SidebarContent = ({ pathname, setIsOpen }: { pathname: string, setIsOpen: (val: boolean) => void }) => (
    <div className="h-full flex flex-col bg-white border-l border-slate-200 w-64 shadow-xl lg:shadow-none">
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-200 shrink-0">
            <Link href="/" className="flex items-center gap-3">
                <Image
                    src="/logo.png"
                    alt="صناع الحياة"
                    width={36}
                    height={36}
                    className="object-contain drop-shadow-sm"
                />
                <span className="font-extrabold text-primary text-sm">صناع الحياة</span>
            </Link>
            <button onClick={() => setIsOpen(false)} className="lg:hidden text-slate-500 hover:text-primary">
                <LuX className="w-5 h-5" />
            </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                            "flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-sm transition-all",
                            isActive
                                ? "bg-secondary/10 text-secondary"
                                : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                        )}
                    >
                        <link.icon className={cn("w-5 h-5", isActive ? "text-secondary" : "text-slate-400")} />
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    </div>
);

export default function AdminSidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) {
    const pathname = usePathname();

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden lg:block shrink-0 h-full">
                <SidebarContent pathname={pathname} setIsOpen={setIsOpen} />
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-40 lg:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                            className="fixed top-0 right-0 h-full z-50 lg:hidden"
                        >
                            <SidebarContent pathname={pathname} setIsOpen={setIsOpen} />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
