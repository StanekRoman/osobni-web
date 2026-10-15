import { Flex, Text } from "@chakra-ui/react";

import type { ServiceBenefitsData } from "../../types";

type Props = ServiceBenefitsData["visual"];

export default function ServiceBenefitsVisual({ items }: Props) {
  return (
    <Flex
      direction="column"
      width={{ base: "100%", md: "340px", xl: "578px" }}
      maxWidth={{ base: "578px", xl: "none" }}
      flexShrink={0}
      alignSelf={{ base: "center", md: "auto" }}
      order={{ base: 1, md: 0 }}
      bg="surfacePrimary"
      border="1px solid"
      borderColor="border"
      borderRadius="lg"
      boxShadow="0 12px 32px rgba(35, 37, 38, 0.03)"
      overflow="hidden"
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        const isHighlighted = index === 1;

        return (
          <Flex
            key={item.title}
            align="center"
            gap={{ base: "12px", xl: "18px" }}
            minHeight={{ base: "88px", xl: "98px" }}
            px={{ base: "16px", xl: "24px" }}
            py={{ base: "16px", xl: "0" }}
            bg={isHighlighted ? "accentSurface" : "surfacePrimary"}
          >
            <Flex
              width={{ base: "44px", xl: "50px" }}
              height={{ base: "44px", xl: "50px" }}
              flexShrink={0}
              align="center"
              justify="center"
              bg={isHighlighted ? "accentLight" : "background"}
              borderRadius="icon"
              color={isHighlighted ? "accentDark" : "textPrimary"}
            >
              <Icon size={19} strokeWidth={2} aria-hidden="true" />
            </Flex>

            <Flex direction="column" align="flex-start" gap="7px" minWidth="0">
              <Text
                fontFamily="heading"
                fontSize="18px"
                lineHeight="20px"
                fontWeight="600"
                color="textPrimary"
              >
                {item.title}
              </Text>

              <Text
                fontFamily="body"
                fontSize="13px"
                lineHeight="20px"
                color="textSubtle"
              >
                {item.description}
              </Text>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}
