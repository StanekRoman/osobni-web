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
          width="100%"
          maxWidth={{ md: "704px", xl: "none" }}
          mx="auto"
          direction={{ base: "column", md: "row" }}
          align={{ base: "stretch", md: "center" }}
          gap={{ base: "40px", md: "32px", xl: "74px" }}
          py={{ base: "64px", md: "88px", xl: "0" }}
        >
          <ServiceApproachContent {...content} />
          <ServiceApproachVisual {...visual} />
        </Flex>
      </Container>
    </Section>
  );
}
