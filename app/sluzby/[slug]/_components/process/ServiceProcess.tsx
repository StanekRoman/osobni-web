import { Flex } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import type { ServiceProcessData } from "../../types";

import ServiceProcessContent from "./ServiceProcessContent";
import ServiceProcessVisual from "./ServiceprocessVisual";

export default function ServiceProcess({
  content,
  visual,
}: ServiceProcessData) {
  return (
    <Section bg="surfacePrimary">
      <Container px={{ base: "20px", md: "xl", xl: "0" }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="flex-start"
          justify={{ base: "center", xl: "flex-start" }}
          gap={{ base: "48px", md: "64px", xl: "90px" }}
          py={{ base: "72px", md: "96px", xl: "136px" }}
        >
          <ServiceProcessContent {...content} />
          <ServiceProcessVisual {...visual} />
        </Flex>
      </Container>
    </Section>
  );
}
