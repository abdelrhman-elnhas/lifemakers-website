
import type { Metadata } from "next";
import VolunteerForm from "@/components/client/volunteer/VolunteerForm";

export const metadata: Metadata = {
  title: "اتطوع معنا",
  description:
    "اتطوع معنا في جمعية صناع الحياة الخيرية بالمحلة الكبرى، وسجل بياناتك للتطوع معنا.",
  alternates: { canonical: "/volunteer" },
};



export default function VolunteerPage() {


  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 sm:pt-36 sm:pb-28 w-full overflow-x-hidden" aria-label="صفحة التطوع">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute top-40 left-0 w-120 h-120 bg-primary/5 rounded-full blur-3xl pointer-events-none -ml-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <VolunteerForm />
      </div>
    </div>
  );
}
