import type { Metadata } from "next";
import AboutSection from "@/components/client/AboutSection";
import VisionMissionSection from "@/components/client/about/VisionMissionSection";
import BoardHierarchy from "@/components/client/about/BoardHierarchy";
import TeamsSection from "@/components/client/about/TeamsSection";
import PageHero from "@/components/client/PageHero";


export const metadata: Metadata = {
  title: "من نحن",
  description:
    "تعرف على رؤية ورسالة جمعية صناع الحياة الخيرية، وفريق العمل ومجلس الإدارة.",
  alternates: { canonical: "/about" },
};


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <PageHero
        title="عن الجمعية"
        description="تعرف على رؤيتنا ورسالتنا، والفرق ومجلس الإدارة الذي يعمل على تحقيق التنمية المستدامة."
        imageSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop"
      />
      <AboutSection />
      <VisionMissionSection />
      <BoardHierarchy />
      <TeamsSection />
    </main>
  );
}
