import { Box, Flex, Text } from "@chakra-ui/react";
import { LuArrowDown } from "react-icons/lu";

export default function ServicesHeroVisual() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="16px"
      width={{ base: "100%", md: "350px" }}
      maxWidth="350px"
      minHeight={{ base: "260px", md: "300px" }}
      flexShrink="0"
      alignSelf={{ base: "center", xl: "auto" }}
      p={{ base: "24px", md: "34px" }}
      bg="accentSurface"
      border="1px solid"
      borderColor="accentLight"
      borderRadius="xl"
      boxShadow="0 18px 44px rgba(91, 33, 182, 0.055)"
    >
      <Text
        fontFamily="body"
        fontSize="10px"
        lineHeight="10px"
        fontWeight="700"
        letterSpacing="1.4px"
        color="accent"
      >
        PROBLÉM
      </Text>

      <Box color="accent" aria-hidden="true">
        <LuArrowDown size={36} strokeWidth={2} />
      </Box>

      <Text
        fontFamily="body"
        fontSize="10px"
        lineHeight="10px"
        fontWeight="700"
        letterSpacing="1.4px"
        color="accentDark"
      >
        VHODNÉ ŘEŠENÍ
      </Text>

      <Text
        fontFamily="heading"
        fontSize={{ base: "20px", md: "22px" }}
        lineHeight={{ base: "27px", md: "29px" }}
        fontWeight="600"
        textAlign="center"
        color="textPrimary"
      >
        Web • aplikace
        <br />
        automatizace • péče
      </Text>
    </Flex>
  );
}
