import { Flex } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import type { ServiceFaqData } from "../../types";

import ServiceFaqContent from "./ServiceFaqContent";
import ServiceFaqAccordion from "./ServiceFaqAccordion";

export default function ServiceFaq({ content, items }: ServiceFaqData) {
  return (
    <Section bg="surfacePrimary">
      <Container>
        <Flex
          direction={{ base: "column", xl: "row" }}
          align="flex-start"
          gap={{ base: "40px", md: "48px", xl: "90px" }}
          py={{ base: "72px", md: "96px", xl: "100px" }}
        >
          <ServiceFaqContent {...content} />
          <ServiceFaqAccordion items={items} />
        </Flex>
      </Container>
    </Section>
  );
}
