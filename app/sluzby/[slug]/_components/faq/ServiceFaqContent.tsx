import { Flex, Text } from "@chakra-ui/react";

import type { ServiceFaqData } from "../../types";

type Props = ServiceFaqData["content"];

export default function ServiceFaqContent({
  eyebrow,
  heading,
  description,
}: Props) {
  return (
    <Flex
      direction="column"
      align="flex-start"
      gap="20px"
      width={{ base: "100%", xl: "420px" }}
      flexShrink="0"
    >
      <Text
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
        fontSize={{ base: "32px", md: "38px", xl: "43px" }}
        lineHeight={{ base: "38px", md: "44px", xl: "46px" }}
        fontWeight="600"
        color="textPrimary"
      >
        {heading}
      </Text>

      <Text fontSize="15px" lineHeight="24px" color="textSubtle">
        {description}
      </Text>
    </Flex>
  );
}
