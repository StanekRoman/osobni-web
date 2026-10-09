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
      gap={{ base: "lg", md: "26px", xl: "30px" }}
      width={{ base: "100%", xl: "550px" }}
      height={{ base: "auto", xl: "650px" }}
      minHeight={{ base: "auto", xl: "650px" }}
      flexShrink={0}
      px={{ base: "lg", md: "36px", xl: "42px" }}
      py={{ base: "30px", md: "36px", xl: "44px" }}
      bg="accentSurface"
      border="1px solid"
      borderColor="accentLight"
      borderRadius={{
        base: "22px",
        md: "26px",
        xl: "28px 0 0 28px",
      }}
      boxShadow="0 14px 40px rgba(91, 33, 182, 0.045)"
    >
      <Box px="13px" py="xs" bg="accentLight" borderRadius="full">
        <Text color="accentDark" textStyle="label">
          Nejčastější řešení
        </Text>
      </Box>

      <Heading
        as="h3"
        fontFamily="heading"
        fontSize={{
          base: "30px",
          md: "36px",
          xl: "42px",
        }}
        lineHeight={{
          base: "36px",
          md: "41px",
          xl: "45px",
        }}
        fontWeight="600"
        color="textPrimary"
      >
        Nový web na míru
      </Heading>

      <Text
        maxWidth={{ base: "100%", md: "600px", xl: "450px" }}
        fontSize={{ base: "15px", md: "16px", xl: "17px" }}
        lineHeight={{ base: "24px", xl: "26px" }}
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
          <Flex as="li" key={feature} align="center" gap="sm">
            <Box
              width="8px"
              height="8px"
              borderRadius="full"
              bg="accent"
              flexShrink={0}
            />

            <Text fontSize="14px" lineHeight="20px" color="textPrimary">
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
        px="lg"
        minHeight="45px"
        bg="accent"
        color="textLight"
        borderRadius="sm"
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
