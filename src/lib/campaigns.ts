import { Campaign } from '@/types/campaign';

export function getCurrentOffset(currentDate: Date = new Date()): number {
  const currentYear = currentDate.getFullYear();
  
  const cycleYear = currentDate.getMonth() < 7 ? currentYear - 1 : currentYear;
  
  const cycleStart = new Date(cycleYear, 7, 1);
  
  const utcCurrent = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  const utcStart = Date.UTC(cycleStart.getFullYear(), cycleStart.getMonth(), cycleStart.getDate());
  
  const diffTime = utcCurrent - utcStart;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export type ActiveCampaignResult = {
  campaign: Campaign;
  state: 'active' | 'upcoming';
};

export function getActiveCampaign(
  campaigns: Campaign[],
  currentDate: Date = new Date()
): ActiveCampaignResult | null {
  const offset = getCurrentOffset(currentDate);
  
  const validCampaigns = campaigns.filter(c => c.type === 'campaign');
  
  const active = validCampaigns.find(c => offset >= c.start && offset <= c.end);
  if (active) {
    return { campaign: active, state: 'active' };
  }
  
  let upcoming: Campaign | null = null;
  for (const c of validCampaigns) {
    if (c.start > offset) {
      if (!upcoming || c.start < upcoming.start) {
        upcoming = c;
      }
    }
  }
  
  if (upcoming) {
    return { campaign: upcoming, state: 'upcoming' };
  }
  
  return null;
}
