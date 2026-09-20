"use client";

import { motion } from "framer-motion";
import { LuUsers, LuTrophy, LuMessageSquare, LuClipboardList, LuArrowUpRight } from "react-icons/lu";

const stats = [
    {
        title: "زوار الموقع",
        value: "45,231",
        change: "+12.5%",
        icon: LuUsers,
        color: "text-blue-500",
        bgColor: "bg-blue-50",
    },
    {
        title: "إجمالي الإنجازات",
        value: "1,204",
        change: "+5.2%",
        icon: LuTrophy,
        color: "text-secondary",
        bgColor: "bg-secondary/10",
    },
    {
        title: "الرسائل الواردة",
        value: "342",
        change: "+18.1%",
        icon: LuMessageSquare,
        color: "text-green-500",
        bgColor: "bg-green-50",
    },
    {
        title: "طلبات التطوع",
        value: "89",
        change: "+2.4%",
        icon: LuClipboardList,
        color: "text-purple-500",
        bgColor: "bg-purple-50",
    },
];

export default function DashboardStats() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" dir="rtl">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                    {/* Decorative gradient overlay */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-secondary transition-colors" />

                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
                            <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
                        </div>
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bgColor}`}>
                            <stat.icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                    </div>

                    <div className="flex items-center gap-1.5 mt-4">
                        <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-xs font-bold">
                            <LuArrowUpRight className="w-3 h-3" />
                            {stat.change}
                        </div>
                        <span className="text-xs text-slate-400">مقارنة بالشهر الماضي</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
