import { Flex } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import ServicesHeroContent from "./HeroContent";
import ServicesHeroVisual from "./HeroVisual";

export default function ServicesHero() {
  return (
    <Section bg="surfaceSecondary">
      <Container px={{ base: "20px", md: "xl", xl: "0" }}>
        <Flex
          minHeight={{ xl: "620px" }}
          direction={{ base: "column", xl: "row" }}
          align={{ base: "stretch", xl: "center" }}
          gap={{ base: "48px", md: "60px", xl: "86px" }}
          py={{ base: "72px", md: "96px", xl: "0" }}
        >
          <ServicesHeroContent />
          <ServicesHeroVisual />
        </Flex>
      </Container>
    </Section>
  );
}
