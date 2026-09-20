"use client";

import { motion } from "framer-motion";
import {
  LuUser,
  LuPhone,
  LuMail,
  LuChevronDown,
  LuSend,
  LuCheck,
  LuTriangleAlert,
  LuLayers,
} from "react-icons/lu";
import { useSubmitMessage } from "@/hooks/useContact";
import { useForm } from "react-hook-form";
import { ContactFormValues, contactSchema } from "@/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactForm() {

  const { mutateAsync, isSuccess } = useSubmitMessage();

  const {
    register, handleSubmit, reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema), });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await mutateAsync(data)
      reset();
    } catch (e) {
      console.error(e);
    }
  }
  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full min-h-75 flex flex-col items-center justify-center text-center p-6 bg-white/5 rounded-2xl border border-emerald-500/30"
      >
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
          <LuCheck className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
          تم إرسال رسالتك بنجاح!
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-md leading-relaxed">
          شكرًا لتواصلك مع صناع الحياة بالمحلة الكبرى. سيقوم أحد مسؤولينا بالتواصل معك في أقرب وقت.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-3.5 sm:gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {/* ── Name ── */}
        <div className="flex flex-col gap-1">
          <div className="relative">
            <label htmlFor="contact-name" className="sr-only">الاسم</label>
            <div className="absolute top-1/2 -translate-y-1/2 right-3.5 text-secondary pointer-events-none">
              <LuUser className="w-4 h-4" />
            </div>
            <input
              id="contact-name"
              type="text"
              placeholder="الاسم بالكامل *"
              aria-invalid={!!errors.name}
              {...register("name")}
              className={`w-full bg-white/10 hover:bg-white/14 focus:bg-white/18 border rounded-xl pr-10 pl-3.5 py-3 min-h-11 text-xs min-[340px]:text-sm text-white placeholder:text-slate-300 outline-none transition-all ${errors.name
                ? "border-red-400 focus:border-red-400"
                : "border-white/20 focus:border-secondary"
                }`}
            />
          </div>
          {errors.name && (
            <p className="flex items-center gap-1 text-red-300 text-[11px] font-medium">
              <LuTriangleAlert className="w-3 h-3 shrink-0" />
              {errors.name.message as string}
            </p>
          )}
        </div>

        {/* ── Phone ── */}
        <div className="flex flex-col gap-1">
          <div className="relative">
            <label htmlFor="contact-phone" className="sr-only">رقم الهاتف</label>
            <div className="absolute top-1/2 -translate-y-1/2 right-3.5 text-secondary pointer-events-none">
              <LuPhone className="w-4 h-4" />
            </div>
            <input
              id="contact-phone"
              type="tel"
              dir="rtl"
              placeholder="رقم الهاتف *"
              aria-invalid={!!errors.phone_number}
              {...register("phone_number")}
              className={`w-full bg-white/10 hover:bg-white/14 focus:bg-white/18 border rounded-xl pr-10 pl-3.5 py-3 min-h-[44px] text-xs min-[340px]:text-sm text-white placeholder:text-slate-300 outline-none transition-all ${errors.phone_number
                ? "border-red-400 focus:border-red-400"
                : "border-white/20 focus:border-secondary"
                }`}
            />
          </div>
          {errors.phone_number && (
            <p className="flex items-center gap-1 text-red-300 text-[11px] font-medium">
              <LuTriangleAlert className="w-3 h-3 shrink-0" />
              {errors.phone_number.message as string}
            </p>
          )}
        </div>

        {/* ── Subject ── */}
        <div className="flex flex-col gap-1">
          <div className="relative">
            <label htmlFor="subject" className="sr-only">عنوان الاستفسار</label>
            <div className="absolute top-1/2 -translate-y-1/2 right-3.5 text-secondary pointer-events-none">
              <LuLayers className="w-4 h-4" />
            </div>
            <input
              id="subject"
              type="text"
              dir="rtl"
              placeholder="ادخل عنوان الاستفسار *"
              aria-invalid={!!errors.subject}
              {...register("subject", { required: "هذا الحقل مطلوب" })}
              className={`w-full bg-white/10 hover:bg-white/14 focus:bg-white/18 border rounded-xl pr-10 pl-3.5 py-3 min-h-[44px] text-xs min-[340px]:text-sm text-white placeholder:text-slate-300 outline-none transition-all ${errors.subject
                ? "border-red-400 focus:border-red-400"
                : "border-white/20 focus:border-secondary"
                }`}
            />

            <div className="absolute top-1/2 -translate-y-1/2 left-3 text-white/60 pointer-events-none">
              <LuChevronDown className="w-4 h-4" />
            </div>
          </div>
          {errors.subject && (
            <p className="flex items-center gap-1 text-red-300 text-[11px] font-medium">
              <LuTriangleAlert className="w-3 h-3 shrink-0" />
              {errors.subject.message as string}
            </p>
          )}
        </div>

        {/* ── Email ── */}
        <div className="flex flex-col gap-1">
          <div className="relative">
            <label htmlFor="contact-email" className="sr-only">البريد الإلكتروني</label>
            <div className="absolute top-1/2 -translate-y-1/2 right-3.5 text-secondary pointer-events-none">
              <LuMail className="w-4 h-4" />
            </div>
            <input
              id="contact-email"
              type="email"
              placeholder="البريد الإلكتروني (اختياري)"
              aria-invalid={!!errors.email}
              {...register("email")}
              className={`w-full bg-white/10 hover:bg-white/14 focus:bg-white/18 border rounded-xl pr-10 pl-3.5 py-3 min-h-[44px] text-xs min-[340px]:text-sm text-white placeholder:text-slate-300 outline-none transition-all ${errors.email
                ? "border-red-400 focus:border-red-400"
                : "border-white/20 focus:border-secondary"
                }`}
            />
          </div>
          {errors.email && (
            <p className="flex items-center gap-1 text-red-300 text-[11px] font-medium">
              <LuTriangleAlert className="w-3 h-3 shrink-0" />
              {errors.email.message as string}
            </p>
          )}
        </div>
      </div>

      {/* ── Message Textarea ── */}
      <div className="flex flex-col gap-1">
        <label htmlFor="contact-message" className="sr-only">الرسالة</label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="اكتب رسالتك أو تفاصيل استفسارك هنا ..."
          aria-invalid={!!errors.message}
          {...register("message", { required: "هذا الحقل مطلوب" })}
          className={`w-full bg-white/10 hover:bg-white/14 focus:bg-white/18 border rounded-xl p-3.5 min-h-[44px] text-xs min-[340px]:text-sm text-white placeholder:text-slate-300 outline-none transition-all resize-none ${errors.message
            ? "border-red-400 focus:border-red-400"
            : "border-white/20 focus:border-secondary"
            }`}
        />
        {errors.message && (
          <p className="flex items-center gap-1 text-red-300 text-[11px] font-medium">
            <LuTriangleAlert className="w-3 h-3 shrink-0" />
            {errors.message.message as string}
          </p>
        )}
      </div>

      {/* ── Submit Button ── */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={isSubmitting ? {} : { scale: 1.02 }}
        whileTap={isSubmitting ? {} : { scale: 0.98 }}
        className="w-full bg-linear-to-r from-secondary to-[#e09831] hover:from-[#e09831] hover:to-[#ca8420] disabled:opacity-60 disabled:cursor-not-allowed text-[#11395f] font-black py-3.5 px-6 min-h-[44px] rounded-xl flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all border-none cursor-pointer"
      >
        <LuSend className="w-4 h-4 transform -scale-x-100" />
        <span>{isSubmitting ? "جارٍ الإرسال ..." : "إرسال الرسالة"}</span>
      </motion.button>
    </form>
  );
}
