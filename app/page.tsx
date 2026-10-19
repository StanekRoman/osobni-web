import HomeAutomation from "@/app/components/automation/HomeAutomation";
import HomeCTA from "@/app/components/cta/HomeCTA";
import HomeHero from "@/app/components/hero/HomeHero";
import HomeOutcomes from "@/app/components/outcomes/HomeOutcomes";
import HomeProcess from "@/app/components/process/HomeProcess";
import HomeServices from "@/app/components/services/HomeServices";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeOutcomes />
      <HomeServices />
      <HomeCTA />
      <HomeProcess />
      <HomeAutomation />
    </main>
  );
}
