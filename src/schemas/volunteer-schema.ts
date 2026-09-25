import { z } from "zod";

export const volunteerSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(5, "الاسم ثلاثي يجب أن يقول 10 حروف على الأقل"),
    national_id: z.string().regex(/^\d{14}$/, "الرقم القومي يجب أن يكون 14 رقم"),
    age: z.coerce
        .number({ invalid_type_error: "السن مطلوب" })
        .min(10, "السن غير صحيح")
        .max(99, "السن غير صحيح"),
    address: z.string().min(5, "العنوان مطلوب"),
    phone_number: z
        .string()
        .regex(/^01[0125]\d{8}$/, "رقم الهاتف غير صحيح"),
    gmail: z.string().email("بريد إلكتروني غير صحيح"),
    facebook_url: z
        .string()
        .regex(
            /^https?:\/\/(www\.)?facebook\.com\/.+$/,
            "رابط فيسبوك غير صحيح"
        ),
    linkedin_url: z
        .string()
        .regex(/^https?:\/\/(www\.)?linkedin\.com\/in\/.+$/)
        .optional()
        .or(z.literal("")),
    university: z.string().min(2, "الجامعة مطلوبة"),
    faculty: z.string().min(2, "الكلية مطلوبة"),
    year_of_study: z.string().min(1, "اختر السنة الدراسية"),
    job: z.string().optional(),
    skills: z.string().optional(),
    preferable_team: z.string().optional(),
});

export type VolunteerFormValues = z.infer<typeof volunteerSchema>;

