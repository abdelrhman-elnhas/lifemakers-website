import { Metadata } from "next";
import NotFoundContent from "@/components/client/NotFoundContent";
import Navbar from "@/components/client/Navbar";
import FooterBottomBar from "@/components/client/footer/FooterBottomBar";

export const metadata: Metadata = {
  title: "404 - الصفحة غير موجودة | جمعية صناع الحياة",
  description: "الصفحة التي تبحث عنها غير موجودة. يمكنك العودة للصفحة الرئيسية.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />

      {/* Main 404 Content */}
      <main className="flex-1">
        <NotFoundContent />
      </main>

      {/* Simple inline footer */}
      <FooterBottomBar varient="light" />
    </div>
  );
}
