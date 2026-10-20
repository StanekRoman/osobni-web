import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const principles = [
  {
    number: "01",
    title: "Nejdřív pochopím vaše potřeby",
    description:
      "Probereme, co nabízíte, koho chcete oslovit a co má nový web nebo aplikace přinést.",
  },
  {
    number: "02",
    title: "Návrh i vývoj řeším osobně",
    description:
      "Od struktury a designu až po programování máte jednoho člověka, který zná celý projekt.",
  },
  {
    number: "03",
    title: "Spuštěním spolupráce nekončí",
    description:
      "Mohu se postarat také o údržbu, další úpravy a rozvoj webu podle toho, jak se vaše podnikání mění.",
  },
];

export default function AboutApproach() {
  return (
    <Section bg="background" py={{ base: "72px", md: "96px", xl: "116px" }}>
      <Container px={{ base: "20px", md: "xl", xl: "0" }}>
        <Flex direction="column" gap={{ base: "36px", md: "48px", xl: "56px" }}>
          <Flex direction="column" gap="20px" maxWidth="800px">
            <Text textStyle="eyebrow" color="accent">
              Jak pracuji
            </Text>

            <Heading
              as="h2"
              fontFamily="heading"
              fontSize={{
                base: "clamp(30px, 8vw, 38px)",
                md: "42px",
                xl: "48px",
              }}
              lineHeight="1.12"
              fontWeight="600"
              letterSpacing={{
                base: "-0.5px",
                xl: "-1px",
              }}
              color="textPrimary"
            >
              Od prvního nápadu až po spuštění. Bez zbytečných komplikací.
            </Heading>

            <Text
              textStyle="body"
              fontSize={{ base: "15px", md: "17px" }}
              lineHeight={{ base: "24px", md: "27px" }}
              color="textSubtle"
              maxWidth="760px"
            >
              Nejdřív chci pochopit vaše podnikání a to, co od webu nebo
              aplikace očekáváte. Potom navrhnu vhodný postup, připravím řešení
              a postarám se o jeho realizaci.
            </Text>
          </Flex>

          <Flex
            direction={{ base: "column", xl: "row" }}
            gap={{ base: "16px", md: "20px", xl: "24px" }}
          >
            {principles.map((item) => (
              <Box
                key={item.number}
                flex="1"
                bg="surfacePrimary"
                border="1px solid"
                borderColor="border"
                borderRadius="24px"
                p={{ base: "24px", md: "32px" }}
              >
                <Text
                  fontFamily="heading"
                  fontSize={{ base: "28px", md: "32px" }}
                  fontWeight="600"
                  color="accent"
                  mb={{ base: "24px", xl: "36px" }}
                >
                  {item.number}
                </Text>

                <Heading
                  as="h3"
                  fontFamily="heading"
                  fontSize={{ base: "20px", md: "22px" }}
                  lineHeight="1.3"
                  fontWeight="600"
                  color="textPrimary"
                  mb="16px"
                >
                  {item.title}
                </Heading>

                <Text fontSize="15px" lineHeight="24px" color="textSubtle">
                  {item.description}
                </Text>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
