import { Flex, Text } from "@chakra-ui/react";

import type { ServiceProcessData } from "../../types";

type Props = ServiceProcessData["content"];

export default function ServiceProcessContent({
  eyebrow,
  heading,
  description,
}: Props) {
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

      <Text
        maxWidth="420px"
        fontSize="15px"
        lineHeight="24px"
        color="textSubtle"
      >
        {description}
      </Text>
    </Flex>
  );
}
