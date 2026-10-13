import { Flex, Text } from "@chakra-ui/react";

import type { ServiceApproachData } from "../../types";

type Props = ServiceApproachData["content"];

export default function ServiceApproachContent({
  eyebrow,
  heading,
  description,
}: Props) {
  return (
    <Flex
      direction="column"
      align="flex-start"
      gap="16px"
      width={{ base: "100%", xl: "520px" }}
      flexShrink={0}
    >
      <Text
        fontFamily="body"
        fontSize="12px"
        lineHeight="12px"
        fontWeight="700"
        letterSpacing="1.2px"
        color="#CFFAFE"
      >
        {eyebrow}
      </Text>

      <Text
        as="h2"
        fontFamily="heading"
        fontSize={{ base: "32px", md: "38px", xl: "44px" }}
        lineHeight={{ base: "38px", md: "44px", xl: "48px" }}
        fontWeight="600"
        color="#FFFFFF"
      >
        {heading}
      </Text>

      <Text fontFamily="body" fontSize="16px" lineHeight="25px" color="#D6D8DD">
        {description}
      </Text>
    </Flex>
  );
}
