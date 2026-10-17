import { Flex } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import ContactHeroContent from "./ContactHeroContent";
import ContactMethods from "./ContactMethods";

export default function ContactHero() {
  return (
    <Section bg="background" py={{ base: "60px", md: "80px", xl: "120px" }}>
      <Container>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "stretch", md: "center" }}
          gap={{ base: "40px", md: "24px", xl: "80px" }}
        >
          <Flex
            flex={{ md: "1", xl: "1.2" }}
            minW="0"
            width={{ base: "100%", md: "auto" }}
          >
            <ContactHeroContent />
          </Flex>

          <Flex flex="1" minW="0" width={{ base: "100%", md: "auto" }}>
            <ContactMethods />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
