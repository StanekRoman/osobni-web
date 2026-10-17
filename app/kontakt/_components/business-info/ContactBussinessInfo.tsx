import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function ContactBusinessInfo() {
  return (
    <Section bg="surfacePrimary" py={{ base: "60px", md: "80px" }}>
      <Container>
        <Flex direction="column" gap="32px">
          <Flex direction="column" gap="12px">
            <Text
              color="accent"
              fontSize="13px"
              fontWeight="700"
              letterSpacing="1.2px"
            >
              Identifikační údaje
            </Text>

            <Heading
              as="h2"
              fontFamily="heading"
              fontSize={{ base: "28px", md: "36px" }}
              fontWeight="600"
              color="textPrimary"
            >
              Roman Staněk
            </Heading>
          </Flex>

          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: "24px", md: "48px", xl: "64px" }}
          >
            <Flex direction="column" gap="8px" flex="1">
              <Text color="textSubtle" fontSize="14px">
                IČO
              </Text>

              <Text color="textPrimary" fontSize="17px" fontWeight="600">
                24576468
              </Text>
            </Flex>

            <Flex direction="column" gap="8px" flex="2">
              <Text color="textSubtle" fontSize="14px">
                Sídlo podnikání
              </Text>

              <Text color="textPrimary" fontSize="17px" fontWeight="600">
                Ivana Olbrachta 110, 273 08 Pchery
              </Text>
            </Flex>
          </Flex>

          <Box height="1px" bg="border" />

          <Flex direction="column" gap="12px">
            <Text color="textSubtle" fontSize="15px">
              Nejsem plátce DPH.
            </Text>

            <Text color="textSubtle" fontSize="15px">
              Zapsán v živnostenském rejstříku u Magistrátu města Kladna.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
