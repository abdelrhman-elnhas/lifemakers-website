import CasesGrid from '@/components/client/cases/CasesGrid';
import PageHero from '@/components/client/PageHero';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "الحالات العاجلة",
    description:
        "الحالات العاجلة في جمعية صناع الحياة الخيرية، نعمل على مدار العام بخطة واضحة ومدروسة لتلبية احتياجات الأسر الأشد احتياجًا في الوقت المناسب.",
    alternates: { canonical: "/cases" },
};


export default function CasesPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <PageHero
                title="الحالات العاجلة"
                description="ساهم معنا في رفع المعاناة عن الأسر الأكثر احتياجاً. تبرعك يصنع فرقاً حقيقياً في حياتهم."
                imageSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-40">
                <CasesGrid />
            </div>
        </main>
    );
}
