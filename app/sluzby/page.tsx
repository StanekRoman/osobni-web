import ServicesHero from "./_components/hero/ServicesHero";
import ServicesProcess from "./_components/process/ServicesProcess";
import ServicesBento from "./_components/services/ServicesBento";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesBento />
      <ServicesProcess />
    </main>
  );
}
