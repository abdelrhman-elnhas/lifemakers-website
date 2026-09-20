import React from 'react';
import campaignsData from '@/data/campaigns.json';
import { Campaign } from '@/types/campaign';
import { CampaignTimeline } from '@/components/client/campaigns/CampaignTimeline';
import { CampaignCard } from '@/components/client/campaigns/CampaignCard';
import PageHero from '@/components/client/PageHero';
import { getCurrentOffset } from '@/lib/campaigns';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حملاتنا الخيرية",
  description:
    "حملاتنا الخيرية في المحلة الكبرى، نعمل على مدار العام بخطة واضحة ومدروسة لتلبية احتياجات الأسر الأشد احتياجًا في الوقت المناسب.",
  alternates: { canonical: "/campaigns" },
};


export default function CampaignsPage() {
  // 1. Filter out internal planning gaps
  let campaigns = (campaignsData as Campaign[]).filter(c => c.type === "campaign");

  // 2. Sort chronologically
  campaigns = campaigns.sort((a, b) => {
    return (a.order || 0) - (b.order || 0);
  });

  // Calculate current offset
  const todayOffset = getCurrentOffset();

  let activeCampaignId: string | undefined;
  const pastCampaignIds: string[] = [];

  for (const campaign of campaigns) {
    if (todayOffset > campaign.end) {
      pastCampaignIds.push(campaign.id);
    } else if (todayOffset >= campaign.start && todayOffset <= campaign.end) {
      activeCampaignId = campaign.id;
    }
  }

  // If no campaign is strictly active (e.g. we are in a gap), we can optionally mark the closest upcoming one, or just leave none active.

  return (
    <main className="min-h-screen bg-slate-50 pb-24" dir="rtl">
      <PageHero
        title="حملاتنا الخيرية"
        description="نعمل على مدار العام بخطة واضحة ومدروسة لتلبية احتياجات الأسر الأشد احتياجًا في الوقت المناسب."
        imageSrc="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
      />

      <div className="container mx-auto px-4 max-w-5xl py-12 relative z-40">
        <CampaignTimeline
          campaigns={campaigns}
          activeCampaignId={activeCampaignId}
          pastCampaignIds={pastCampaignIds}
        />

        <div className="space-y-8 mt-12">
          {campaigns.map(campaign => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
              isActive={campaign.id === activeCampaignId}
              isPast={pastCampaignIds.includes(campaign.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
