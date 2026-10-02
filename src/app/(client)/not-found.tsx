import { Metadata } from "next";
import NotFoundContent from "@/components/client/NotFoundContent";

export const metadata: Metadata = {
  title: "404 - الصفحة غير موجودة",
  description: "الصفحة التي تبحث عنها غير موجودة. يمكنك العودة للصفحة الرئيسية.",
};

export default function ClientNotFound() {
  return <NotFoundContent />;
}
