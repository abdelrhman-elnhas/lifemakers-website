"use client";

import { Button } from "@/components/ui/button";
import { LuLogOut, LuMenu } from "react-icons/lu";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function AdminNavbar({ onMenuClick }: { onMenuClick: () => void }) {
    const router = useRouter();
    const supabase = createClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
        router.refresh();
    };

    return (
        <header className="sticky top-0 z-30 w-full bg-white border-b border-slate-200 shadow-sm shrink-0" dir="rtl">
            <div className="flex h-16 items-center px-4 md:px-6 justify-between">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden text-slate-500 hover:text-primary transition-colors p-1"
                    >
                        <LuMenu className="w-6 h-6" />
                    </button>
                    {/* Optional: Add a title here if desired, or keep it clean since sidebar has it */}
                    <div className="hidden lg:block font-bold text-primary">
                        لوحة تحكم صناع الحياة
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        onClick={handleLogout}
                        variant="outline"
                        className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                        <LuLogOut className="w-4 h-4 ml-2" />
                        تسجيل الخروج
                    </Button>
                </div>
            </div>
        </header>
    );
}
