import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";

const siteLinks = [
  { label: "عن الجمعية", href: "/about" },
  { label: "الحملات", href: "/campaigns" },
  { label: "حالات عاجلة", href: "/UrgentCases" },
  { label: "إنجازاتنا", href: "/achievements" },
  { label: "تواصل معنا", href: "/contact" }];

export default function FooterLinks() {
  return (
    <div className="md:col-span-4">
      <h3 className="text-[clamp(1.125rem,4vw,1.5rem)] font-black text-white mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-0.5 after:bg-secondary">
        أقسام الموقع
      </h3>

      <div className="grid grid-cols-1 gap-x-3 gap-y-2.5 text-xs min-[340px]:text-sm">
        {siteLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="group flex items-center gap-1.5 text-slate-300 hover:text-secondary transition-colors py-2 min-h-11 truncate"
          >
            <LuChevronLeft className="w-3.5 h-3.5 text-secondary shrink-0 group-hover:-translate-x-0.5 transition-transform" />
            <span className="truncate">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
