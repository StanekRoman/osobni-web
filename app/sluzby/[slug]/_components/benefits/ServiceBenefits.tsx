import { Flex } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import type { ServiceBenefitsData } from "../../types";

import ServiceBenefitsContent from "./ServiceBenefitsContent";
import ServiceBenefitsVisual from "./ServiceBenefitsVisual";

export default function ServiceBenefits({
  content,
  visual,
}: ServiceBenefitsData) {
  return (
    <Section bg="background">
      <Container px={{ base: "20px", md: "32px", xl: "0" }}>
        <Flex
          minHeight={{ xl: "760px" }}
          width="100%"
          maxWidth={{ md: "704px", xl: "none" }}
          mx="auto"
          direction={{ base: "column", md: "row" }}
          align={{ base: "stretch", md: "center" }}
          gap={{ base: "40px", md: "32px", xl: "82px" }}
          py={{ base: "64px", md: "88px", xl: "0" }}
        >
          <ServiceBenefitsContent {...content} />
          <ServiceBenefitsVisual {...visual} />
        </Flex>
      </Container>
    </Section>
  );
}
