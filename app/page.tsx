import HomeCTA from "@/components/home/cta/HomeCTA";
import HomeHero from "@/components/home/hero/HomeHero";
import HomeOutcomes from "@/components/home/outcomes/HomeOutcomes";
import HomeServices from "@/components/home/services/HomeServices";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeOutcomes />
      <HomeServices />
      <HomeCTA />
    </main>
  );
}
