import Link from "next/link";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function HomeCTA() {
  return (
    <Section
      bg="surfaceDark"
      minHeight={{ base: "auto", xl: "650px" }}
      py={{ base: "4xl", md: "5xl", xl: "136px" }}
    >
      <Container px={{ base: "20px", md: "xl", xl: "0" }}>
        <Flex
          direction={{ base: "column", xl: "row" }}
          align={{ base: "stretch", xl: "center" }}
          gap={{ base: "44px", md: "56px", xl: "4xl" }}
          width="100%"
          minHeight={{ base: "auto", xl: "335px" }}
        >
          {/* Levá část – hlavní sdělení */}
          <Flex
            direction="column"
            align="flex-start"
            gap={{ base: "20px", md: "lg" }}
            width={{ base: "100%", xl: "620px" }}
            flexShrink={{ base: 1, xl: 0 }}
          >
            <Text
              color="blue"
              fontSize={{ base: "11px", md: "13px" }}
              lineHeight={{ base: "17px", md: "19px" }}
              fontWeight="700"
              letterSpacing="1.2px"
            >
              Máte web v hlavě, na papíře nebo už online?
            </Text>

            <Heading
              as="h2"
              fontFamily="heading"
              fontSize={{
                base: "clamp(32px, 8vw, 40px)",
                md: "48px",
                xl: "60px",
              }}
              lineHeight={{
                base: "1.08",
                md: "1.05",
                xl: "55px",
              }}
              fontWeight="600"
              color="textLight"
              letterSpacing="-1px"
            >
              Pojďme najít nejkratší cestu k tomu, co má opravdu fungovat.
            </Heading>

            <Text
              maxWidth={{ base: "100%", md: "560px" }}
              fontSize={{ base: "15px", md: "17px" }}
              lineHeight={{ base: "24px", md: "27px" }}
              color="textLightSecondary"
            >
              Nemusíte mít připravené zadání. Stačí popsat situaci a společně
              vybereme smysluplný další krok.
            </Text>
          </Flex>

          {/* Pravá část – dvě možnosti kontaktu */}
          <Flex
            direction={{
              base: "column",
              md: "row",
              xl: "column",
            }}
            align="stretch"
            gap={{ base: "14px", md: "md" }}
            width={{ base: "100%", xl: "450px" }}
            flexShrink={{ base: 1, xl: 0 }}
          >
            {/* Primární CTA */}
            <Flex
              asChild
              direction="column"
              align="flex-start"
              justify="center"
              gap="14px"
              width={{
                base: "100%",
                md: "auto",
                xl: "100%",
              }}
              flex={{
                base: "initial",
                md: "1",
                xl: "initial",
              }}
              minWidth={0}
              minHeight={{
                base: "auto",
                md: "180px",
                xl: "137px",
              }}
              px={{ base: "lg", md: "28px" }}
              py={{
                base: "26px",
                md: "28px",
                xl: "26px",
              }}
              bg="accent"
              borderRadius="22px"
              color="textLight"
              textDecoration="none"
              transition="background 150ms ease-in-out"
              _hover={{
                bg: "#6D28D9",
              }}
              _focusVisible={{
                outline: "3px solid #CFFAFE",
                outlineOffset: "4px",
              }}
            >
              <Link href="/nezavazne-poptat">
                <Heading
                  as="h3"
                  fontFamily="heading"
                  fontSize={{
                    base: "19px",
                    md: "21px",
                  }}
                  lineHeight="24px"
                  fontWeight="600"
                  color="textLight"
                >
                  Mám konkrétní projekt
                </Heading>

                <Text fontSize="13px" lineHeight="20px" color="accentLight">
                  Popište stručně, co potřebujete. Ozvu se s dalším postupem.
                </Text>

                <Flex
                  align="center"
                  gap="xs"
                  color="textLight"
                  fontSize="13px"
                  lineHeight="18px"
                  fontWeight="700"
                >
                  Nezávazná poptávka
                  <LuArrowRight size={15} />
                </Flex>
              </Link>
            </Flex>

            {/* Sekundární CTA */}
            <Flex
              asChild
              direction="column"
              align="flex-start"
              justify="center"
              gap="14px"
              width={{
                base: "100%",
                md: "auto",
                xl: "100%",
              }}
              flex={{
                base: "initial",
                md: "1",
                xl: "initial",
              }}
              minWidth={0}
              minHeight={{
                base: "auto",
                md: "180px",
                xl: "156px",
              }}
              px={{ base: "lg", md: "28px" }}
              py={{
                base: "26px",
                md: "28px",
                xl: "26px",
              }}
              bg="surfacePrimary"
              borderRadius="22px"
              color="textPrimary"
              textDecoration="none"
              transition="opacity 150ms ease-in-out"
              _hover={{
                opacity: "0.9",
              }}
              _focusVisible={{
                outline: "3px solid #CFFAFE",
                outlineOffset: "4px",
              }}
            >
              <Link href="/kontakt">
                <Heading
                  as="h3"
                  fontFamily="heading"
                  fontSize={{
                    base: "19px",
                    md: "21px",
                  }}
                  lineHeight="24px"
                  fontWeight="600"
                  color="textPrimary"
                >
                  Chci to nejdřív probrat
                </Heading>

                <Text fontSize="13px" lineHeight="20px" color="textSubtle">
                  Krátký hovor bez složité přípravy. Projdeme situaci a
                  možnosti.
                </Text>

                <Flex
                  align="center"
                  gap="xs"
                  color="accent"
                  fontSize="13px"
                  lineHeight="18px"
                  fontWeight="700"
                >
                  Rezervovat hovor
                  <LuArrowRight size={15} />
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
