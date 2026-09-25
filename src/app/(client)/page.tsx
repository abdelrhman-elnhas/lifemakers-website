import HeroSection from "@/components/client/HeroSection";
import ActiveCampaignSection from "@/components/client/campaigns/ActiveCampaignSection";
import AboutSection from "@/components/client/AboutSection";
import AchievementsSection from "@/components/client/achievements/AchievementsSection";
import CasesSection from "@/components/client/cases/CasesSection";
import VolunteerBanner from "@/components/client/VolunteerBanner";
import ContactSection from "@/components/client/ContactSection";
import AtharSection from "@/components/client/AtharSection";
export default function Page() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <CasesSection />
      <ActiveCampaignSection />
      <VolunteerBanner />
      <AchievementsSection layoutType="section" />
      <AtharSection />
      <ContactSection />
    </>
  );
}