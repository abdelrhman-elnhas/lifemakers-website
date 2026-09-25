"use client"

import { useEffect } from "react";
import { useSubmitVolunteer } from "@/hooks/useVolunteers";
import { VolunteerFormValues, volunteerSchema } from "@/schemas/volunteer-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, type Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import teamsData from "@/data/teams.json";
import {
    LuUser,
    LuPhone,
    LuMail,
    LuMapPin,
    LuBookOpen,
    LuBriefcase,
    LuFacebook,
    LuLinkedin,
    LuCreditCard,
    LuCalendar,
    LuGraduationCap,
    LuBuilding,
    LuSend,
    LuAward,
    LuStar
} from "react-icons/lu";



const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
};

const VolunteerForm = () => {


    const { register, reset, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<VolunteerFormValues>({
        resolver: zodResolver(volunteerSchema),
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const team = params.get("team");
            if (team) {
                setValue("preferable_team", team);
            }
        }
    }, [setValue]);

    const { mutateAsync, isPending, isSuccess, isError, error } = useSubmitVolunteer();

    const onSubmit = async (data: VolunteerFormValues) => {
        try {
            await mutateAsync(data)
            reset();
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-center mb-10 sm:mb-16"
            >

                <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4 leading-tight">
                    سجّل للتطوع في <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-[#2a5f90]">صناع الحياة</span>
                </motion.h1>
                <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    عندنا مكان لأي مهارة عندك، سواء كانت تسويق، تصوير، تصميم، تنظيم، أو حتى لو حابب تشاركنا وقتك وجهدك. املأ البيانات التالية وهنتواصل معاك.
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
                <form className="bg-white rounded-4xl shadow-xl shadow-primary/5 border border-slate-100 p-6 sm:p-10 md:p-12" onSubmit={handleSubmit(onSubmit)}>

                    {/* Section 1: Personal Info */}
                    <div className="mb-10">
                        <h3 className="text-lg sm:text-xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <LuUser className="w-4 h-4 text-primary" />
                            </span>
                            البيانات الشخصية
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-slate-700">الاسم الرباعي <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <LuUser className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input {...register("name")} type="text" id="name" placeholder="أدخل اسمك بالكامل" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                                </div>
                                {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="national_id" className="text-sm font-bold text-slate-700">الرقم القومي (14 رقم) <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <LuCreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input {...register("national_id")} type="text" id="national_id" placeholder="أدخل الرقم القومي" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                                </div>
                                {errors.national_id && <p className="text-red-500 text-xs">{errors.national_id.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="age" className="text-sm font-bold text-slate-700">السن <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <LuCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input {...register("age")} type="number" id="age" placeholder="أدخل عمرك" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                                </div>
                                {errors.age && <p className="text-red-500 text-xs">{errors.age.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="address" className="text-sm font-bold text-slate-700">العنوان بالتفصيل <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <LuMapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input {...register("address")} type="text" id="address" placeholder="الشارع، المنطقة، المحافظة" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                                </div>
                                {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Contact Info */}
                    <div className="mb-10">
                        <h3 className="text-lg sm:text-xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <LuPhone className="w-4 h-4 text-primary" />
                            </span>
                            بيانات التواصل
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="phone_number" className="text-sm font-bold text-slate-700">رقم الهاتف <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <LuPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input {...register("phone_number")} type="tel" id="phone_number" dir="ltr" placeholder="01X XXXX XXXX" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm text-right focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                                </div>
                                {errors.phone_number && <p className="text-red-500 text-xs">{errors.phone_number.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="gmail" className="text-sm font-bold text-slate-700">البريد الإلكتروني (Gmail) <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <LuMail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input {...register("gmail")} type="email" id="gmail" dir="ltr" placeholder="example@gmail.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm text-right focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                                </div>
                                {errors.gmail && <p className="text-red-500 text-xs">{errors.gmail.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="facebook_url" className="text-sm font-bold text-slate-700">رابط حساب الفيسبوك <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <LuFacebook className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input {...register("facebook_url")} type="url" id="facebook_url" dir="ltr" placeholder="https://facebook.com/..." className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm text-right focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                                </div>
                                {errors.facebook_url && <p className="text-red-500 text-xs">{errors.facebook_url.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="linkedin_url" className="text-sm font-bold text-slate-700">رابط حساب لينكد إن <span className="text-slate-400 font-normal">(اختياري)</span></label>
                                <div className="relative">
                                    <LuLinkedin className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input {...register("linkedin_url")} type="url" id="linkedin_url" dir="ltr" placeholder="https://linkedin.com/in/..." className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm text-right focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                                </div>
                                {errors.linkedin_url && <p className="text-red-500 text-xs">{errors.linkedin_url.message}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Academic / Career Info */}
                    <div className="mb-10">
                        <h3 className="text-lg sm:text-xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <LuGraduationCap className="w-4 h-4 text-primary" />
                            </span>
                            البيانات الدراسية والمهنية
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="university" className="text-sm font-bold text-slate-700">الجامعة <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <LuBuilding className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input {...register("university")} type="text" id="university" placeholder="اسم الجامعة" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                                </div>
                                {errors.university && <p className="text-red-500 text-xs">{errors.university.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="faculty" className="text-sm font-bold text-slate-700">الكلية <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <LuBookOpen className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input {...register("faculty")} type="text" id="faculty" placeholder="اسم الكلية" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                                </div>
                                {errors.faculty && <p className="text-red-500 text-xs">{errors.faculty.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="year_of_study" className="text-sm font-bold text-slate-700">السنة الدراسية <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <LuBookOpen className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input {...register("year_of_study")} type="text" id="year_of_study" placeholder="ادخل السنة الدراسية" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                                </div>
                                {errors.year_of_study && <p className="text-red-500 text-xs">{errors.year_of_study.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="job" className="text-sm font-bold text-slate-700">الوظيفة الحالية <span className="text-slate-400 font-normal">(إن وجد)</span></label>
                                <div className="relative">
                                    <LuBriefcase className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input {...register("job")} type="text" id="job" placeholder="المسمى الوظيفي ومكان العمل" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="job" className="text-sm font-bold text-slate-700">المهارات <span className="text-slate-400 font-normal">(إن وجد)</span></label>
                                <div className="relative">
                                    <LuAward className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input {...register("skills")} type="text" id="job" placeholder="مثال: التصميم - الكتابة - المونتاج" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="preferable_team" className="text-sm font-bold text-slate-700">الفريق الذي تفضل التطوع فيه <span className="text-slate-400 font-normal">(إن وجد)</span></label>
                                <div className="relative">
                                    <LuStar className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <select {...register("preferable_team")} id="preferable_team" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pr-12 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none cursor-pointer">
                                        <option value="">اختر الفريق اذا كان لك تفضيل</option>
                                        {teamsData.map((team) => (
                                            <option key={team.id} value={team.name}>{team.name}</option>
                                        ))}
                                    </select>
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {isError && (
                        <p className="text-red-500 text-sm text-center mb-4">{error.message}</p>
                    )}
                    {isSuccess && (
                        <p className="text-green-600 text-sm text-center mb-4">تم إرسال طلبك بنجاح!</p>
                    )}

                    <div className="pt-6 border-t border-slate-100 flex justify-center">
                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting || isPending}
                            className="w-full sm:w-auto bg-secondary text-primary font-bold text-base px-12 py-4 rounded-xl shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 hover:bg-[#e09e36] transition-all flex items-center justify-center gap-3 group"
                        >
                            {isPending ? "جارٍ الإرسال..." : "إرسال طلب التطوع"}
                            <LuSend className="w-5 h-5 -rotate-90 transition-transform group-hover:-translate-x-1" />
                        </motion.button>
                    </div>

                </form>
            </motion.div>
        </>
    )
}

export default VolunteerForm