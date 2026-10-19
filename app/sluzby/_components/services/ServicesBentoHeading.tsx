import { Flex, Text } from "@chakra-ui/react";

export default function ServicesBentoHeading() {
  return (
    <Flex
      direction="column"
      align="flex-start"
      gap="16px"
      maxWidth="760px"
      mb="10px"
    >
      <Text
        fontSize="12px"
        lineHeight="12px"
        fontWeight="700"
        letterSpacing="1.2px"
        color="accent"
      >
        Přehled služeb
      </Text>

      <Text
        as="h2"
        fontFamily="heading"
        fontSize={{ base: "32px", md: "38px", xl: "44px" }}
        lineHeight={{ base: "38px", md: "44px", xl: "48px" }}
        fontWeight="600"
        color="textPrimary"
      >
        Služby, které pomáhají <br /> vašemu podnikání růst.
      </Text>

      <Text
        maxWidth="650px"
        fontSize={{ base: "15px", xl: "16px" }}
        lineHeight="25px"
        color="textSubtle"
      >
        Ať potřebujete nový web, modernizovat ten současný nebo ušetřit čas
        automatizací, společně najdeme vhodné řešení.
      </Text>
    </Flex>
  );
}
