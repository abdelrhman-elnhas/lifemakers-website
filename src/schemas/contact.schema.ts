import { z } from "zod";

// Strip / reject common SQL injection and script-injection patterns via regex.
const SAFE_TEXT = /^[^<>"'`\\;|&$()\[\]{}%*!]+$/u; // No dangerous chars
const SAFE_NAME = /^[\p{L}\p{N}\s\-'.]+$/u;          // Letters, digits, spaces, hyphens, dots, apostrophes

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "الاسم يجب أن يكون حرفين على الأقل")
    .max(80, "الاسم طويل جدًا")
    .regex(SAFE_NAME, "الاسم يحتوي على أحرف غير مسموح بها"),

  phone_number: z
    .string()
    .min(7, "رقم الهاتف قصير جدًا")
    .max(20, "رقم الهاتف طويل جدًا")
    .regex(/^\+?[0-9\s\-()]{7,20}$/, "رقم الهاتف غير صحيح، أدخل أرقامًا فقط"),

  email: z
    .string()
    .max(120, "البريد الإلكتروني طويل جدًا")
    .refine((v) => v === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), {
      message: "صيغة البريد الإلكتروني غير صحيحة",
    })
    .optional()
    .or(z.literal("")),

  subject: z
    .string()
    .min(2, "العنوان قصير جدًا")
    .max(100, "العنوان طويل جدًا")
    .regex(SAFE_NAME, "العنوان يحتوي على أحرف غير مسموح بها"),

  message: z
    .string()
    .min(10, "الرسالة قصيرة جدًا — اكتب 10 أحرف على الأقل")
    .max(1200, "الرسالة طويلة جدًا — الحد الأقصى 1200 حرف")
    .regex(SAFE_TEXT, "الرسالة تحتوي على رموز غير مسموح بها"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
