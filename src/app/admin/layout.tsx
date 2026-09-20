import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import AdminLayoutShell from "@/components/admin/AdminLayoutShell";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};


export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return <AdminLayoutShell>{children}</AdminLayoutShell>;
}
