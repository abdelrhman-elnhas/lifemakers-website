import PageHero from "@/components/client/PageHero";
import AchievementsGrid from "@/components/client/achievements/AchievementsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "إنجازاتنا",
  description:
    "إنجازات جمعية صناع الحياة الخيرية، من دعم الأسر، تطوير البيوت، وتوفير المياه النظيفة للمحتاجين في المحلة الكبرى.",
  alternates: { canonical: "/achievements" },
};


export default function AchievementsPage() {

  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden" dir="rtl">
      <PageHero
        title="إنجازاتنا"
        description="كل سقف بنعمّره، وكل بيت بنوصّله المياه، وكل ابتسامة بنرسمها هي إنجاز حقيقي بنفتخر بيه في جمعية صناع الحياة."
        imageSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop"
      />

      {/* ── Achievements Grid ── */}
      <section className="py-20 sm:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <AchievementsGrid layoutType="page" />
        </div>
      </section>
    </main>
  );
}
