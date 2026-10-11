import { Flex } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import ServicesBentoHeading from "./ServicesBentoHeading";
import ServicesBentoGrid from "./ServicesBentoGrid";

export default function ServicesBento() {
  return (
    <Section bg="surfacePrimary">
      <Container px={{ base: "20px", md: "xl", xl: "0" }}>
        <Flex direction="column" py={{ base: "72px", md: "96px", xl: "108px" }}>
          <ServicesBentoHeading />
          <ServicesBentoGrid />
        </Flex>
      </Container>
    </Section>
  );
}
