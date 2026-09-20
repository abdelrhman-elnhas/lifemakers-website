"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LuMail, LuLock, LuArrowLeft } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "@/schemas/login.schema";

export default function AdminLoginPage() {

    const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const router = useRouter();
    const supabase = createClient();

    const handleLogin = async (data: LoginFormValues) => {
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password
            });
            if (error) {
                return;
            }
            reset();
            router.push("/admin");
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 relative overflow-hidden" dir="rtl">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-125 h-125 bg-secondary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-125 h-125 bg-primary/5 rounded-full blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4" />

            {/* Return to website link */}
            <Link
                href="/"
                className="absolute top-6 right-6 lg:top-10 lg:right-10 flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-bold z-20"
            >
                <LuArrowLeft className="w-5 h-5 rotate-180" />
                العودة للموقع
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10 relative z-10"
            >
                <div className="flex flex-col items-center mb-8">
                    <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 border border-primary/10 overflow-hidden p-2">
                        <Image
                            src="/logo.png"
                            alt="صناع الحياة"
                            width={80}
                            height={80}
                            className="object-contain w-full h-full drop-shadow-md"
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-primary mb-2">لوحة التحكم</h1>
                    <p className="text-sm text-slate-500 text-center">قم بتسجيل الدخول للوصول إلى لوحة الإدارة</p>
                </div>

                <form onSubmit={handleSubmit(handleLogin)} className="space-y-5" >
                    <div>
                        <label className="block text-sm font-bold text-primary mb-2" htmlFor="email">
                            البريد الإلكتروني
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                                <LuMail className="w-5 h-5" />
                            </div>
                            <input
                                id="email"
                                type="email"
                                {...register("email")}
                                className="block w-full pl-3 pr-11 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all bg-slate-50 focus:bg-white text-sm outline-none"
                                placeholder="admin@lifemakers.org"
                                dir="ltr"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-primary mb-2" htmlFor="password">
                            كلمة المرور
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                                <LuLock className="w-5 h-5" />
                            </div>
                            <input
                                id="password"
                                type="password"
                                {...register("password")}
                                className="block w-full pl-3 pr-11 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all bg-slate-50 focus:bg-white text-sm outline-none"
                                placeholder="••••••••"
                                dir="ltr"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-linear-to-r from-secondary to-[#e09831] text-[#11395f] hover:shadow-lg hover:shadow-secondary/20 font-bold text-base py-6 rounded-xl transition-all border border-secondary/50"
                        >
                            {isSubmitting ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
                        </Button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}