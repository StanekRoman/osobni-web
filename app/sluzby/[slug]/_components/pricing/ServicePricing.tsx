import { Flex } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import type { ServicePricingData } from "../../types";

import ServicePricingContent from "./ServicePricingContent";
import ServicePricingVisual from "./ServicePricingVisual";

export default function ServicePricing({
  content,
  visual,
}: ServicePricingData) {
  return (
    <Section bg="accentSurface">
      <Container px={{ base: "20px", md: "32px", xl: "0" }}>
        <Flex
          minHeight={{ xl: "470px" }}
          width="100%"
          maxWidth={{ md: "704px", xl: "none" }}
          mx="auto"
          direction={{ base: "column", md: "row" }}
          align={{ base: "stretch", md: "center" }}
          gap={{ base: "32px", md: "32px", xl: "72px" }}
          py={{ base: "64px", md: "88px", xl: "0" }}
        >
          <ServicePricingContent {...content} />
          <ServicePricingVisual {...visual} />
        </Flex>
      </Container>
    </Section>
  );
}
