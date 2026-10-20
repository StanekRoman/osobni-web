import { Flex } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import type { ServiceHeroData } from "../../types";

import ServiceHeroContent from "./ServiceHeroContent";
import ServiceHeroVisual from "./ServiceHeroVisual";

export default function ServiceHero({ content, visual }: ServiceHeroData) {
  return (
    <Section bg="surfaceSecondary">
      <Container px={{ base: "20px", md: "32px", xl: "0" }}>
        <Flex
          minHeight={{ xl: "620px" }}
          direction={{ base: "column", md: "row" }}
          align={{ base: "stretch", md: "center" }}
          gap={{ base: "xl", md: "lg", xl: "4xl" }}
          py={{ base: "64px", md: "88px", xl: "0" }}
        >
          <ServiceHeroContent {...content} />
          <ServiceHeroVisual {...visual} />
        </Flex>
      </Container>
    </Section>
  );
}
