import { LuMapPin, LuPhone, LuMail } from "react-icons/lu";

export default function FooterTopHighlights() {
  return (
    <div className="border-b border-white/10 bg-[#0b223a]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 min-[360px]:px-5 sm:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* 1. Address */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-all">
            <div className="w-11 h-11 min-[340px]:w-12 min-[340px]:h-12 rounded-full bg-secondary/15 border border-secondary/40 flex items-center justify-center text-secondary shrink-0">
              <LuMapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-300 font-medium">العنوان</p>
              <p className="text-xs min-[340px]:text-sm font-bold text-white leading-snug mt-0.5">
                المحلة الكبرى - 2 ش. محمد الفاتح متفرع من ش. علي الشيشيني
              </p>
            </div>
          </div>

          {/* 2. Hotline & Phone */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-all">
            <div className="w-11 h-11 min-[340px]:w-12 min-[340px]:h-12 rounded-full bg-secondary/15 border border-secondary/40 flex items-center justify-center text-secondary shrink-0">
              <LuPhone className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-300 font-medium">رقم الهاتف</p>
              <p dir="ltr" className="text-xs min-[340px]:text-sm font-bold text-white font-sans mt-0.5 text-right">
                +20 155 055 0961
              </p>
            </div>
          </div>

          {/* 3. Email */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-all">
            <div className="w-11 h-11 min-[340px]:w-12 min-[340px]:h-12 rounded-full bg-secondary/15 border border-secondary/40 flex items-center justify-center text-secondary shrink-0">
              <LuMail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-300 font-medium">نسعد بالرد عليكم عبر</p>
              <a
                href="mailto:info@lifemakers-mahalla.org"
                className="text-xs min-[340px]:text-sm font-bold text-white hover:text-secondary transition-colors break-all inline-flex items-center min-h-11mt-0.5"
              >
                info@lifemakers-mahalla.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
