import { Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import type { ServiceHeroData } from "../../types";

type Props = ServiceHeroData["content"];

export default function ServiceHeroContent({
  eyebrow,
  heading,
  description,
  cta,
}: Props) {
  return (
    <Flex
      direction="column"
      align="flex-start"
      gap={{ base: "22px", md: "24px" }}
      flex={{ base: "none", md: "1" }}
      minWidth="0"
      width="100%"
    >
      <Text
        fontFamily="body"
        fontSize="12px"
        lineHeight="16px"
        fontWeight="700"
        letterSpacing="1.2px"
        color="accent"
      >
        {eyebrow}
      </Text>

      <Text
        as="h1"
        fontFamily="heading"
        fontSize={{ base: "36px", md: "46px", xl: "52px" }}
        lineHeight={{ base: "42px", md: "50px", xl: "54px" }}
        fontWeight="600"
        letterSpacing="-1px"
        color="textPrimary"
      >
        {heading}
      </Text>

      <Text
        maxWidth="540px"
        fontFamily="body"
        fontSize={{ base: "16px", md: "17px" }}
        lineHeight={{ base: "25px", md: "27px" }}
        color="textSubtle"
      >
        {description}
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
        _focusVisible={{
          outline: "3px solid",
          outlineColor: "accentDark",
          outlineOffset: "3px",
        }}
      >
        <Link href={cta.href}>
          {cta.label}
          <LuArrowRight size={17} strokeWidth={2} />
        </Link>
      </ChakraLink>
    </Flex>
  );
}
