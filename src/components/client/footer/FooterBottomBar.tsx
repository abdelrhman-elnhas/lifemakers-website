import Link from "next/link";

export default function FooterBottomBar({ varient = "dark" }: { varient: "dark" | "light" }) {
  return (
    <div className={`${varient === "dark" ? "border-t border-white/10 bg-[#051322]" : "border-t border-slate-200 bg-slate-50"} py-5 text-xs text-slate-400`}>
      <div className="max-w-7xl mx-auto px-3 min-[360px]:px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">
        {/* Copyright text */}
        <p className={`${varient === "dark" ? "text-slate-300" : "text-slate-600"} order-1 sm:order-2 text-xs font-medium`}>
          جميع الحقوق محفوظة © {new Date().getFullYear()} مؤسسة صناع الحياة المحلة الكبرى
        </p>
        <p className={`${varient === "dark" ? "text-slate-300" : "text-slate-600"} order-1 sm:order-2 text-xs font-medium`}>
          Developed by: <Link className="font-bold text-secondary" href="https://abdelrhman-elnhas.com" target="_blank" rel="noopener noreferrer">AE Studio</Link>
        </p>
      </div>
    </div>
  );
}
