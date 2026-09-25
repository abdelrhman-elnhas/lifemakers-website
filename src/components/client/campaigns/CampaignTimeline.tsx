"use client";

import React from "react";
import { Campaign } from "@/types/campaign";
import { cn } from "@/lib/utils";

interface CampaignTimelineProps {
  campaigns: Campaign[];
  activeCampaignId?: string;
  pastCampaignIds: string[];
}

export function CampaignTimeline({
  campaigns,
  activeCampaignId,
  pastCampaignIds,
}: CampaignTimelineProps) {
  return (
    <div className="w-full py-8 mb-12">
      <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-bold mb-8 text-center text-gray-900">
        خطة الحملات السنوية
      </h2>
      <div className="relative">
        {/* Horizontal Line for Desktop */}
        {/* <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full" /> */}

        {/* Vertical Line for Mobile */}
        {/* <div className="block md:hidden absolute top-0 inset-inline-start-[27px] w-1 h-full bg-gray-200 rounded-full" /> */}

        <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4">
          {campaigns.map((campaign) => {
            const isActive = campaign.id === activeCampaignId;
            const isPast = pastCampaignIds.includes(campaign.id);
            const isFuture = !isActive && !isPast;

            return (
              <a
                key={campaign.id}
                href={`#${campaign.id}`}
                className={cn(
                  "flex md:flex-col items-center md:items-center gap-4 group transition-transform hover:-translate-y-1",
                  isFuture ? "opacity-70 hover:opacity-100" : "opacity-100"
                )}
                aria-label={`انتقل إلى ${campaign.name}`}
              >
                {/* Mobile & Desktop Icon/Node */}
                <div
                  className={cn(
                    "w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md transition-all z-10 shrink-0",
                    isActive ? "ring-4 ring-offset-2 ring-blue-100 scale-110" : ""
                  )}
                  style={{ backgroundColor: campaign.color }}
                >
                  {campaign.short.charAt(0)}
                </div>

                {/* Text Content */}
                <div className="flex flex-col md:text-center">
                  <span
                    className={cn(
                      "font-bold text-lg transition-colors",
                      isActive ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
                    )}
                  >
                    {campaign.short}
                  </span>
                  <span className="text-sm text-gray-500 mt-1 md:mt-2">
                    {campaign.dates.split("–")[0]}
                  </span>
                  {isActive && (
                    <span
                      className="text-xs font-semibold mt-1 px-2 py-0.5 rounded-full inline-block w-fit md:mx-auto"
                      style={{ backgroundColor: `${campaign.color}20`, color: campaign.color }}
                    >
                      الحالية
                    </span>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
