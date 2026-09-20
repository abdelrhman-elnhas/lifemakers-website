import { z } from "zod";

// Strip / reject common SQL injection and script-injection patterns via regex.
const SAFE_TEXT = /^[^<>"'`\\;|&$()\[\]{}%*!]+$/u; // No dangerous chars
const SAFE_NAME = /^[\p{L}\p{N}\s\-'.]+$/u;          // Letters, digits, spaces, hyphens, dots, apostrophes

export const casesSchema = z.object({
  id: z.string().optional(),

  title: z
    .string()
    .min(2, "العنوان يجب أن يكون حرفين على الأقل")
    .max(80, "العنوان طويل جدًا")
    .regex(SAFE_TEXT, "العنوان يحتوي على أحرف غير مسموح بها"),

  description: z
    .string()
    .min(2, "الوصف قصير جدًا")
    .max(100, "الوصف طويل جدًا")
    .regex(SAFE_TEXT, "الوصف يحتوي على أحرف غير مسموح بها"),

  type: z
    .string()
    .min(2, "نوع الاحتياج يجب أن يكون حرفين على الأقل")
    .max(80, "نوع الاحتياج طويل جدًا")
    .regex(SAFE_TEXT, "نوع الاحتياج يحتوي على أحرف غير مسموح بها"),

  images: z.array(z.string()).optional(),

  remaining: z.number()
    .nonnegative()
    .optional()
    .or(z.literal("")),

  min_amount: z.number()
    .nonnegative()
    .optional()
    .or(z.literal("")),
});

export type CasesFormValues = z.infer<typeof casesSchema>;
