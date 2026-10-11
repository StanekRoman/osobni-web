import { Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

export default function ServicesHeroContent() {
  return (
    <Flex
      direction="column"
      align="flex-start"
      gap={{ base: "24px", xl: "26px" }}
      flex={{ base: "none", xl: "1" }}
      minWidth="0"
      width="100%"
    >
      <Flex
        align="center"
        justify="center"
        height="27px"
        px="13px"
        bg="accentLight"
        borderRadius="999px"
      >
        <Text
          fontFamily="body"
          fontSize="11px"
          lineHeight="11px"
          fontWeight="600"
          letterSpacing="0.3px"
          color="accentDark"
        >
          Služby
        </Text>
      </Flex>

      <Text
        as="h1"
        fontFamily="heading"
        fontSize={{ base: "36px", md: "48px", xl: "61px" }}
        lineHeight={{ base: "42px", md: "54px", xl: "64px" }}
        fontWeight="600"
        letterSpacing={{
          base: "-0.7px",
          md: "-1px",
        }}
        color="textPrimary"
      >
        Nejdřív problém. Potom správné řešení.
      </Text>

      <Text
        maxWidth="620px"
        fontFamily="body"
        fontSize={{ base: "16px", md: "17px", xl: "18px" }}
        lineHeight={{ base: "25px", md: "27px", xl: "28px" }}
        fontWeight="400"
        color="textSubtle"
      >
        Konkrétní řešení skládám podle toho, co má projekt skutečně vyřešit
        {" — "}ne podle předem připraveného balíčku.
      </Text>

      <ChakraLink
        asChild
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        gap="10px"
        width={{ base: "100%", md: "auto" }}
        minHeight={{ base: "48px", md: "45px" }}
        px="24px"
        bg="accent"
        borderRadius="sm"
        color="textLight"
        textStyle="button"
        textDecoration="none"
        transition="background-color 150ms ease-in-out"
        _hover={{ bg: "accentDark" }}
      >
        <Link href="/nezavazne-poptat">
          Popsat, co potřebujete
          <LuArrowRight size={17} strokeWidth={2} />
        </Link>
      </ChakraLink>
    </Flex>
  );
}
