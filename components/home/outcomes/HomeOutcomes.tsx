import { Box, Flex, Text } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import OutcomeCard from "./OutcomeCard";

const outcomes = [
  {
    title: "Vysvětlit nabídku",
    description:
      "Služby, přínosy a další krok musí být jasné i člověku, který vás vidí poprvé.",
    accent: "accentLight",
    left: "89px",
    top: "-38px",
    tabletLeft: "0px",
    tabletTop: "0px",
    zIndex: 1,
  },
  {
    title: "Podpořit důvěru",
    description:
      "Vizuál, obsah a ukázky práce mají společně potvrdit, že návštěvník jedná s profesionálem.",
    accent: "blue",
    left: "432px",
    top: "23px",
    tabletLeft: "calc(100% - 404px)",
    tabletTop: "230px",
    zIndex: 2,
  },
  {
    title: "Usnadnit kontakt",
    description:
      "Poptávka nemá být hledání. Web návštěvníka přirozeně dovede k jednoduchému spojení.",
    accent: "green",
    left: "775px",
    top: "84px",
    tabletLeft: "0px",
    tabletTop: "460px",
    zIndex: 3,
  },
] as const;

export default function HomeOutcomes() {
  return (
    <Section
      bg="background"
      height={{ base: "auto", xl: "848px" }}
      minHeight={{ base: "auto", xl: "760px" }}
      py={{ base: "64px", md: "88px", xl: "0" }}
    >
      <Container
        height={{ base: "auto", xl: "100%" }}
        px={{ base: "lg", md: "xl", xl: "0" }}
      >
        <Flex
          direction="column"
          align={{ base: "stretch", xl: "center" }}
          justify="center"
          gap={{ base: "40px", md: "48px", xl: "60px" }}
          height={{ base: "auto", xl: "100%" }}
        >
          <Flex
            direction="column"
            align="flex-start"
            gap={{ base: "12px", md: "16px" }}
            width="100%"
            height={{ base: "auto", xl: "128px" }}
            flexShrink={0}
          >
            <Text
              fontSize={{
                base: "11px",
                md: "12px",
                xl: "13px",
              }}
              lineHeight={{ base: "1.3", xl: "13px" }}
              fontWeight="700"
              letterSpacing="1.3px"
              color="accent"
            >
              Co má váš web zvládnout
            </Text>

            <Text
              as="h2"
              width={{ base: "100%", xl: "820px" }}
              maxWidth="100%"
              fontFamily="editorial"
              fontSize={{
                base: "30px",
                md: "38px",
                xl: "45px",
              }}
              lineHeight={{
                base: "1.15",
                md: "1.13",
                xl: "50px",
              }}
              fontWeight="600"
              color="textPrimary"
            >
              Tři věci, které rozhodují dřív než{" "}
              <Box as="br" display={{ base: "none", xl: "block" }} />
              efektní animace.
            </Text>
          </Flex>

          <Box
            position="relative"
            display={{ base: "grid", md: "block" }}
            gridTemplateColumns="1fr"
            gap={{ base: "16px", md: "0" }}
            width={{
              base: "100%",
              md: "min(100%, 600px)",
              xl: "1268px",
            }}
            alignSelf={{ base: "stretch", md: "center" }}
            height={{
              base: "auto",
              md: "770px",
              xl: "396px",
            }}
            flexShrink={0}
          >
            {outcomes.map((outcome) => (
              <OutcomeCard key={outcome.title} {...outcome} />
            ))}
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}
