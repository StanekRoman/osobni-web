import { Flex, Text } from "@chakra-ui/react";

import type { ServiceBenefitsData } from "../../types";

type Props = ServiceBenefitsData["content"];

export default function ServiceBenefitsContent({
  eyebrow,
  heading,
  description,
}: Props) {
  return (
    <Flex
      direction="column"
      align="flex-start"
      gap={{ base: "16px", xl: "20px" }}
      width={{ base: "100%", md: "auto", xl: "500px" }}
      flex={{ base: "none", md: "1", xl: "none" }}
      minWidth="0"
      order={{ base: 0, md: 1 }}
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
        fontSize={{ base: "32px", md: "30px", xl: "43px" }}
        lineHeight={{ base: "38px", md: "36px", xl: "46px" }}
        fontWeight="600"
        color="textPrimary"
      >
        {heading}
      </Text>

      <Text
        maxWidth="460px"
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
