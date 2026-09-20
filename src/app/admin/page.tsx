import DashboardStats from "@/components/admin/DashboardStats";
import DashboardCharts from "@/components/admin/DashboardCharts";

export const metadata = {
  title: "لوحة التحكم - صناع الحياة",
};

export default function AdminDashboardPage() {
  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto w-full">
      <div className="mb-8" dir="rtl">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">مرحباً بك في لوحة التحكم</h1>
        <p className="text-slate-500">نظرة عامة على أداء الموقع وإحصائياته اليومية.</p>
      </div>

      <DashboardStats />
      <DashboardCharts />
    </div>
  );
}