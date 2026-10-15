import { Flex, Text } from "@chakra-ui/react";

import type { ServicePricingData } from "../../types";

type Props = ServicePricingData["content"];

export default function ServicePricingContent({
  eyebrow,
  heading,
  description,
}: Props) {
  return (
    <Flex
      direction="column"
      align="flex-start"
      gap={{ base: "16px", xl: "18px" }}
      width={{ base: "100%", md: "auto", xl: "650px" }}
      flex={{ base: "none", md: "1", xl: "none" }}
      minWidth="0"
    >
      <Text
        fontFamily="body"
        fontSize="12px"
        lineHeight="12px"
        fontWeight="700"
        letterSpacing="1.2px"
        color="accent"
      >
        {eyebrow}
      </Text>

      <Text
        as="h2"
        fontFamily="heading"
        fontSize={{ base: "30px", md: "29px", xl: "39px" }}
        lineHeight={{ base: "36px", md: "35px", xl: "43px" }}
        fontWeight="600"
        color="textPrimary"
      >
        {heading}
      </Text>

      <Text
        maxWidth="610px"
        fontFamily="body"
        fontSize="15px"
        lineHeight="24px"
        color="textSubtle"
      >
        {description}
      </Text>
    </Flex>
  );
}
