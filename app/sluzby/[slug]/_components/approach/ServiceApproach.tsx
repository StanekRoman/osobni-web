import { Flex } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import type { ServiceApproachData } from "../../types";

import ServiceApproachContent from "./ServiceApproachContent";
import ServiceApproachVisual from "./ServiceApproachVisual";

export default function ServiceApproach({
  content,
  visual,
}: ServiceApproachData) {
  return (
    <Section bg="#232526">
      <Container px={{ base: "20px", md: "32px", xl: "0" }}>
        <Flex
          minHeight={{ xl: "700px" }}
          direction={{ base: "column", xl: "row" }}
          align={{ base: "stretch", xl: "center" }}
          justify={{ xl: "space-between" }}
          gap={{ base: "40px", md: "48px", xl: "74px" }}
          py={{ base: "64px", md: "88px", xl: "0" }}
        >
          <ServiceApproachContent {...content} />
          <ServiceApproachVisual {...visual} />
        </Flex>
      </Container>
    </Section>
  );
}
