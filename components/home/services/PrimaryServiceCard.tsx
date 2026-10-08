import Link from "next/link";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";

const features = [
  "Struktura a obsahový směr",
  "Vizuální návrh přizpůsobený značce",
  "Responzivní technické zpracování",
  "SEO / GEO / AEO základ",
];

export default function PrimaryServiceCard() {
  return (
    <Flex
      as="article"
      direction="column"
      align="flex-start"
      gap="30px"
      width="550px"
      height="650px"
      minHeight="650px"
      flexShrink={0}
      px="42px"
      py="44px"
      bg="accentSurface"
      border="1px solid"
      borderColor="accentLight"
      borderRadius="28px 0 0 28px"
      boxShadow="0 14px 40px rgba(91, 33, 182, 0.045)"
    >
      <Box px="13px" py="8px" bg="accentLight" borderRadius="full">
        <Text
          color="accentDark"
          fontSize="11px"
          lineHeight="11px"
          fontWeight="600"
          letterSpacing="0.3px"
        >
          Nejčastější řešení
        </Text>
      </Box>

      <Heading
        as="h3"
        fontFamily="heading"
        fontSize="42px"
        lineHeight="45px"
        fontWeight="600"
        color="textPrimary"
      >
        Nový web na míru
      </Heading>

      <Text
        maxWidth="450px"
        fontSize="17px"
        lineHeight="26px"
        color="textSubtle"
      >
        Pro podnikání, které potřebuje první kvalitní prezentaci nebo nový
        základ odpovídající současným službám.
      </Text>

      <Flex
        as="ul"
        direction="column"
        gap="14px"
        listStyleType="none"
        m="0"
        p="0"
      >
        {features.map((feature) => (
          <Flex as="li" key={feature} align="center" gap="12px">
            <Box
              width="8px"
              height="8px"
              borderRadius="full"
              bg="accent"
              flexShrink={0}
            />

            <Text fontSize="14px" lineHeight="18px" color="textPrimary">
              {feature}
            </Text>
          </Flex>
        ))}
      </Flex>

      <Flex
        asChild
        align="center"
        justify="center"
        gap="10px"
        px="24px"
        height="45px"
        bg="accent"
        color="textLight"
        borderRadius="14px"
        fontSize="14px"
        fontWeight="600"
        _hover={{ bg: "accentDark" }}
        transition="background 0.2s ease"
      >
        <Link href="/sluzby/tvorba-webu">
          Tvorba nového webu
          <LuArrowRight size={17} />
        </Link>
      </Flex>
    </Flex>
  );
}
