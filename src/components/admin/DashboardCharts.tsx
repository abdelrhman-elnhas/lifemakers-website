"use client";

import { motion } from "framer-motion";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from "recharts";

const visitorData = [
    { name: "يناير", visitors: 4000 },
    { name: "فبراير", visitors: 3000 },
    { name: "مارس", visitors: 5000 },
    { name: "أبريل", visitors: 4500 },
    { name: "مايو", visitors: 6000 },
    { name: "يونيو", visitors: 7000 },
    { name: "يوليو", visitors: 8500 },
];

const formsData = [
    { name: "يناير", volunteers: 12, messages: 45 },
    { name: "فبراير", volunteers: 19, messages: 52 },
    { name: "مارس", volunteers: 15, messages: 38 },
    { name: "أبريل", volunteers: 25, messages: 65 },
    { name: "مايو", volunteers: 22, messages: 59 },
    { name: "يونيو", volunteers: 30, messages: 80 },
    { name: "يوليو", volunteers: 45, messages: 95 },
];

export default function DashboardCharts() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6" dir="rtl">
            {/* Visitors Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            >
                <div className="mb-6">
                    <h3 className="text-lg font-bold text-primary">زوار الموقع (اخر 7 شهور)</h3>
                    <p className="text-sm text-slate-500">نظرة عامة على حركة المرور في الموقع</p>
                </div>
                <div className="h-75 w-full" dir="ltr">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={visitorData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#64748b', fontSize: 12 }} 
                                dy={10} 
                            />
                            <YAxis 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#64748b', fontSize: 12 }} 
                            />
                            <Tooltip 
                                cursor={{ fill: '#f8fafc' }}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Bar dataKey="visitors" fill="#11395f" radius={[6, 6, 0, 0]} barSize={30} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </motion.div>

            {/* Forms & Messages Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            >
                <div className="mb-6 flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold text-primary">التفاعل والمشاركة</h3>
                        <p className="text-sm text-slate-500">طلبات التطوع والرسائل الواردة</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-secondary"></div>
                            <span className="text-xs text-slate-500">متطوعين</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#2f8fd6]"></div>
                            <span className="text-xs text-slate-500">رسائل</span>
                        </div>
                    </div>
                </div>
                <div className="h-75 w-full" dir="ltr">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={formsData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorVolunteers" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f1ad4a" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#f1ad4a" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorMessages" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2f8fd6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#2f8fd6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#64748b', fontSize: 12 }} 
                                dy={10} 
                            />
                            <YAxis 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#64748b', fontSize: 12 }} 
                            />
                            <Tooltip 
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="volunteers" 
                                name="متطوعين" 
                                stroke="#f1ad4a" 
                                strokeWidth={3}
                                fillOpacity={1} 
                                fill="url(#colorVolunteers)" 
                            />
                            <Area 
                                type="monotone" 
                                dataKey="messages" 
                                name="رسائل" 
                                stroke="#2f8fd6" 
                                strokeWidth={3}
                                fillOpacity={1} 
                                fill="url(#colorMessages)" 
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </motion.div>
        </div>
    );
}
