"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Campaign } from "@/types/campaign";
import campaignsData from "@/data/campaigns.json";
import { getActiveCampaign } from "@/lib/campaigns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiCalendar, FiClock, FiTarget, FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ActiveCampaignSection() {
  const campaigns = campaignsData as Campaign[];

  const activeData = useMemo(() => {
    return getActiveCampaign(campaigns, new Date());
  }, [campaigns]);

  if (!activeData) {
    // Graceful fallback if cycle is completely over
    return (
      <section className="py-16 bg-slate-100 w-full" dir="rtl">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-[clamp(1.875rem,5vw,2.5rem)] font-bold text-primary mb-4">
            حملاتنا الخيرية
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            تعرف على الحملات والمبادرات التي قمنا بها خلال العام، وساهم معنا في المبادرات القادمة.
          </p>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
            <Link href="/campaigns">
              شاهد كل الحملات
              <FiArrowLeft className="mr-2 rotate-180 md:rotate-0" />
            </Link>
          </Button>
        </div>
      </section>
    );
  }

  const { campaign, state } = activeData;
  const isUpcoming = state === "upcoming";

  return (
    <section className="py-20 md:py-32 relative bg-slate-200 w-full overflow-hidden" dir="rtl">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-50/50 skew-x-12 origin-top-left -z-10 hidden lg:block"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20"
        >
          {/* Main Typography & Titles */}
          <div className="flex-1 space-y-8">
            <div>
              <Badge
                className="mb-4 text-sm font-bold px-5 py-2 border-secondary text-secondary bg-secondary/10 rounded-full"
                variant="outline"
              >
                {isUpcoming ? "تبدأ قريبًا" : "الحملة الحالية"}
              </Badge>

              <h2 className="text-[clamp(2rem,6vw,3.75rem)] font-black text-primary leading-tight mb-6">
                {campaign.name}
              </h2>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 font-semibold text-lg pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-5 h-5 text-secondary" />
                  <span>{campaign.dates}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="w-5 h-5 text-secondary" />
                  <span>{campaign.duration}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-4 text-xl">
                <FiTarget className="w-6 h-6 text-secondary" />
                الهدف من الحملة
              </h4>
              <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-medium">
                {campaign.goal}
              </p>
            </div>

            <div className="pt-2">
              <h4 className="font-bold text-gray-900 mb-4 text-base">محاور العمل:</h4>
              <div className="flex flex-wrap gap-2.5">
                {campaign.pillars.map((pillar, idx) => (
                  <span
                    key={idx}
                    className="text-sm font-semibold py-2 px-5 bg-slate-50 text-gray-700 rounded-full border border-slate-200"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <Button size="lg" onClick={() => window.location.href = `https://wa.me/+201550550961?text=${encodeURIComponent(`أريد التبرع لحملة: ${campaign.name}`)}`}
                className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 text-lg px-10 py-6 rounded-lg font-bold shadow-xl shadow-primary/20 transition-transform hover:-translate-y-1">
                تبرع الآن
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-slate-200 text-gray-700 hover:bg-slate-50 text-lg px-10 py-6 rounded-lg transition-colors">
                <Link href="/campaigns">شاهد كل الحملات</Link>
              </Button>
            </div>
          </div>

          {/* Accent Visual Side */}
          <div className="hidden lg:flex lg:w-5/12 justify-center relative">
            <div className="relative aspect-square w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
              <Image
                src="/campaign2.jpg"
                alt="حملة خيرية"
                fill
                className="object-cover"
              />

              {/* Overlay gradient using campaign color to tie it back to the theme */}
              <div
                className="absolute inset-0 opacity-40 mix-blend-multiply"
                style={{ backgroundColor: campaign.color || '#11395F' }}
              ></div>
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
            </div>

            {/* Floating detail card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-20 -right-10 bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 max-w-65"
            >
              <p className="text-primary font-bold text-lg mb-2">شاركنا الأجر</p>
              <p className="text-gray-500 text-sm leading-relaxed">مساهمتك تصنع فارقاً حقيقياً في حياة المستفيدين.</p>
              <div className="mt-4 h-1.5 w-12 bg-secondary rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
