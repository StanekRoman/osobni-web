import NextLink from "next/link";
import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import { HiArrowRight } from "react-icons/hi2";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import AutomationWorkflow from "./AutomationWorkflow";

export default function HomeAutomation() {
  return (
    <Section
      bg="surfacePrimary"
      minHeight={{ xl: "900px" }}
      py={{ base: "72px", md: "100px", xl: "148px" }}
    >
      <Container px={{ base: "20px", md: "32px", xl: "0" }}>
        <Flex
          direction={{ base: "column", xl: "row" }}
          align={{ base: "stretch", md: "center" }}
          gap={{ base: "48px", md: "64px", xl: "86px" }}
          width="100%"
          height={{ base: "auto", xl: "500px" }}
        >
          <Flex
            direction="column"
            align="flex-start"
            gap={{ base: "20px", md: "24px" }}
            width={{ base: "100%", xl: "500px" }}
            flexShrink={0}
          >
            <Text
              fontSize="13px"
              lineHeight="13px"
              fontWeight="700"
              letterSpacing="1.3px"
              color="accent"
            >
              Automatizace a interní nástroje
            </Text>

            <Heading
              as="h2"
              fontFamily="heading"
              fontSize={{ base: "32px", md: "40px", xl: "45px" }}
              lineHeight={{ base: "38px", md: "46px", xl: "49px" }}
              fontWeight="600"
              color="textPrimary"
            >
              Méně rutinní práce. <br />
              Více času na podnikání.
            </Heading>

            <Text
              maxWidth="470px"
              fontSize="16px"
              lineHeight="26px"
              color="textSubtle"
            >
              Přepisujete objednávky z e-mailů do tabulek? Přenášíte údaje mezi
              systémy nebo opakujete stejné úkoly každý den? Navrhnu jednoduchý
              nástroj nebo automatizaci, která část práce udělá za vás.
            </Text>

            <Link
              asChild
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              gap="10px"
              minHeight="47px"
              px="24px"
              py="14px"
              bg="surfacePrimary"
              border="1px solid"
              borderColor="border"
              borderRadius="14px"
              color="textPrimary"
              fontSize="14px"
              lineHeight="15px"
              fontWeight="600"
              textDecoration="none"
              transition="ease-in-out 150ms"
              _hover={{
                borderColor: "accent",
                background: "accentSurface",
              }}
            >
              <NextLink href="/sluzby/automatizace-a-nastroje">
                Prozkoumat automatizace
                <HiArrowRight
                  size={17}
                  color="var(--chakra-colors-accent)"
                  aria-hidden="true"
                />
              </NextLink>
            </Link>
          </Flex>

          <AutomationWorkflow />
        </Flex>
      </Container>
    </Section>
  );
}
