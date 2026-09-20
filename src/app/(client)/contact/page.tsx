import ContactInfo from "@/components/client/contact/ContactInfo";
import ContactForm from "@/components/client/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
title: "تواصل معنا",
    description:
        "تواصل مع جمعية صناع الحياة الخيرية بالمحلة الكبرى للاستفسار عن برامجنا أو التطوع أو التبرع.",
    alternates: { canonical: "/contact" },
};


export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 overflow-hidden pt-12 sm:pt-24" dir="rtl">
            <section className="relative py-8 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Right Side: Map */}
                    <div className="w-full flex flex-col order-1 lg:order-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 lg:mb-8 text-center lg:text-right">
                            موقعنا على الخريطة
                        </h2>
                        <div className="w-full h-100 lg:h-full min-h-100 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                            <iframe
                                title="موقع صناع الحياة بالمحلة الكبرى على الخريطة"
                                src="https://maps.google.com/maps?q=30.977916568660213,31.167667295836317&z=17&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Left Side: Contact Form & Info Card */}
                    <div className="w-full order-2 lg:order-1 flex flex-col">
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-linear-to-br from-primary via-primary-hover to-[#0a2138] text-white shadow-2xl border border-white/10 h-full">
                            {/* Decorative ambient orbs */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2f8fd6]/15 rounded-full blur-3xl pointer-events-none" />

                            <div className="flex flex-col relative z-10 h-full">
                                <div className="flex-none border-b border-white/10">
                                    <ContactInfo />
                                </div>
                                <div className="grow p-5 min-[360px]:p-6 sm:p-8 md:p-10">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
