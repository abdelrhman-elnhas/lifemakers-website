import CasesGrid from '@/components/client/cases/CasesGrid';
import PageHero from '@/components/client/PageHero';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "الحالات العاجلة",
    description:
        "تعرف على الحالات الإنسانية العاجلة التي تدعمها جمعية صناع الحياة بالمحلة الكبرى، وساهم في مساعدة الأسر الأكثر احتياجًا من خلال التبرع والمشاركة.",
    alternates: {
        canonical: "/cases",
    },
};

export default function CasesPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            <PageHero
                title="حالات لا تحتمل الانتظار"
                description="ساهم معنا في رفع المعاناة عن الأسر المستحقة، وساعدهم على تجاوز احتياجاتهم والوصول إلى حياة أكثر أمانا واستقرارا"
                imageSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-40">
                <CasesGrid />
            </div>
        </main>
    );
}
