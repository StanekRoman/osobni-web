import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import NextLink from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function InquiryHero() {
  return (
    <Section bg="background" py={{ base: "60px", md: "80px", xl: "120px" }}>
      <Container>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "stretch", md: "center" }}
          gap={{ base: "40px", md: "32px", xl: "80px" }}
        >
          <Flex
            direction="column"
            align="flex-start"
            gap={{ base: "20px", xl: "24px" }}
            flex={{ md: "1", xl: "1" }}
            minW="0"
            width={{ base: "100%", md: "auto" }}
          >
            <Text
              color="accent"
              fontSize="13px"
              fontWeight="700"
              letterSpacing="1.2px"
            >
              Nezávazná poptávka
            </Text>

            <Heading
              as="h1"
              maxW="900px"
              fontFamily="heading"
              fontSize={{ base: "36px", md: "40px", xl: "64px" }}
              fontWeight="600"
              lineHeight={{ base: "1.12", xl: "1.08" }}
              letterSpacing={{ base: "-0.8px", xl: "-1.5px" }}
              color="textPrimary"
            >
              Nemusíte mít hotové zadání.
            </Heading>

            <Text
              maxW="720px"
              color="textSubtle"
              fontSize={{ base: "16px", xl: "18px" }}
              lineHeight={{ base: "26px", xl: "29px" }}
            >
              Stačí základní kontext. Formulář má zjistit, co řešíte — ne vás
              nutit psát specifikaci.
            </Text>
          </Flex>

          <Box
            flex={{ md: "1", xl: "0 0 360px" }}
            minW="0"
            width={{ base: "100%", md: "auto" }}
            borderWidth="1px"
            borderColor="border"
            borderRadius="20px"
            p={{ base: "24px", md: "24px", xl: "32px" }}
          >
            <Box mb={{ base: "20px", xl: "24px" }}>
              <LuArrowUpRight size={28} />
            </Box>

            <Heading
              as="h2"
              fontFamily="heading"
              fontSize={{ base: "22px", xl: "24px" }}
              fontWeight="600"
              color="textPrimary"
              mb="12px"
            >
              Raději krátký hovor?
            </Heading>

            <Text
              color="textSubtle"
              fontSize={{ base: "15px", xl: "16px" }}
              lineHeight="1.6"
              mb="24px"
            >
              Rezervace hovoru je stejně důležitá cesta jako formulář.
            </Text>

            <Link asChild fontWeight="600" color="textPrimary">
              <NextLink href="/kontakt">
                Domluvit hovor
                <LuArrowRight size={18} />
              </NextLink>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}
