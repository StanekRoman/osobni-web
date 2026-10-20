import { Flex, Text } from "@chakra-ui/react";

export default function ServicesProcessIntro() {
  return (
    <Flex
      direction="column"
      align="flex-start"
      gap="20px"
      width={{ base: "100%", md: "320px", xl: "460px" }}
      flexShrink="0"
    >
      <Text
        fontSize="12px"
        lineHeight="12px"
        fontWeight="700"
        letterSpacing="1.2px"
        color="accent"
      >
        Jak probíhá spolupráce
      </Text>

      <Text
        as="h2"
        fontFamily="heading"
        fontSize={{ base: "32px", md: "38px", xl: "43px" }}
        lineHeight={{ base: "38px", md: "44px", xl: "46px" }}
        fontWeight="600"
        color="textPrimary"
      >
        Od prvního rozhovoru po hotové řešení.
      </Text>

      <Text
        maxWidth="420px"
        fontSize="15px"
        lineHeight="24px"
        color="textSubtle"
      >
        Probereme vaše potřeby, připravím návrh a po jeho schválení se pustím do
        realizace. V každé fázi budete vědět, co se právě děje.
      </Text>
    </Flex>
  );
}
