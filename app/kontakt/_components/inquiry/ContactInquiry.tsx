import Link from "next/link";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function ContactInquiry() {
  return (
    <Section bg="background" py={{ base: "60px", md: "80px", xl: "100px" }}>
      <Container>
        <Flex
          direction="column"
          align="flex-start"
          gap={{ base: "24px", xl: "28px" }}
        >
          <Flex direction="column" gap="16px">
            <Text
              color="accent"
              fontSize="13px"
              fontWeight="700"
              letterSpacing="1.2px"
            >
              Máte už konkrétnější představu?
            </Text>

            <Heading
              as="h2"
              fontFamily="heading"
              fontSize={{
                base: "32px",
                md: "40px",
                xl: "48px",
              }}
              fontWeight="600"
              lineHeight="1.12"
              color="textPrimary"
            >
              Pošlete pár vět předem.
            </Heading>

            <Text
              maxW="700px"
              fontSize={{ base: "16px", md: "17px" }}
              lineHeight={{ base: "26px", md: "27px" }}
              color="textSubtle"
            >
              Nemusíte připravovat specifikaci. Stačí stručně popsat, co
              potřebujete vyřešit.
            </Text>
          </Flex>

          <Flex
            asChild
            align="center"
            gap="12px"
            bg="accent"
            color="textLight"
            px="26px"
            py="16px"
            borderRadius="12px"
            fontWeight="600"
            _hover={{ bg: "accentDark" }}
          >
            <Link href="/nezavazne-poptat">
              Nezávazná poptávka
              <LuArrowRight />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
