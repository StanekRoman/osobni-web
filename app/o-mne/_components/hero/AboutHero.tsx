import Link from "next/link";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import AboutHeroVisual from "./AboutHeroVisual";

export default function AboutHero() {
  return (
    <Section bg="surfaceSecondary">
      <Container px={{ base: "20px", md: "xl", xl: "0" }}>
        <Flex
          minHeight={{ base: "auto", xl: "620px" }}
          direction={{ base: "column", xl: "row" }}
          align={{ base: "stretch", xl: "center" }}
          gap={{ base: "44px", md: "56px", xl: "80px" }}
          py={{ base: "72px", md: "96px", xl: "0" }}
        >
          <Flex
            direction="column"
            align="flex-start"
            gap={{ base: "20px", md: "24px" }}
            width={{ base: "100%", xl: "580px" }}
            flexShrink={{ base: 1, xl: 0 }}
          >
            <Text textStyle="eyebrow" color="accent">
              O mně
            </Text>

            <Heading
              as="h1"
              fontFamily="heading"
              fontSize={{
                base: "clamp(34px, 9vw, 42px)",
                md: "48px",
                xl: "56px",
              }}
              lineHeight="1.08"
              fontWeight="600"
              letterSpacing={{
                base: "-0.8px",
                md: "-1.2px",
                xl: "-1.5px",
              }}
              color="textPrimary"
            >
              Jsem Roman. Navrhuji a vyvíjím weby i praktická digitální řešení.
            </Heading>

            <Text
              textStyle="body"
              fontSize={{ base: "15px", md: "17px" }}
              lineHeight={{ base: "24px", md: "27px" }}
              color="textSubtle"
              maxWidth="550px"
            >
              Programovat jsem začal před pěti lety z obyčejné zvědavosti, co
              všechno se dá vytvořit. Ta zvědavost mě drží dodnes. Baví mě
              hledat nové možnosti, řešit problémy a každý den se učit něco
              nového.
            </Text>

            <Flex
              asChild
              align="center"
              gap="10px"
              bg="accent"
              color="textLight"
              px="26px"
              py="18px"
              borderRadius="14px"
              fontSize="14px"
              fontWeight="600"
              _hover={{ bg: "accentDark" }}
            >
              <Link href="/kontakt">
                Napište mi
                <LuArrowRight />
              </Link>
            </Flex>
          </Flex>

          <AboutHeroVisual />
        </Flex>
      </Container>
    </Section>
  );
}
