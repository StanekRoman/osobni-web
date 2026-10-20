import { Flex, Heading, Text } from "@chakra-ui/react";

export default function ContactHeroContent() {
  return (
    <Flex direction="column" align="flex-start" gap="24px">
      <Text
        color="accent"
        fontSize="13px"
        fontWeight="700"
        letterSpacing="1.2px"
      >
        Kontakt
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
        Ozvěte se způsobem, který vám vyhovuje.
      </Heading>

      <Text
        maxW="720px"
        color="textSubtle"
        fontSize={{ base: "16px", xl: "18px" }}
        lineHeight={{ base: "26px", xl: "29px" }}
      >
        Máte nápad na nový web, potřebujete upravit ten současný nebo hledáte
        způsob, jak si usnadnit práci? Napište mi nebo zavolejte. Rád s vámi
        proberu možnosti spolupráce.
      </Text>
    </Flex>
  );
}
