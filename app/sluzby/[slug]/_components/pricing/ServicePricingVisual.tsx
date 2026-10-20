import { Box, Flex, Text } from "@chakra-ui/react";

import type { ServicePricingData } from "../../types";

type Props = ServicePricingData["visual"];

export default function ServicePricingVisual({ factors }: Props) {
  return (
    <Flex
      direction="column"
      width={{ base: "100%", md: "300px", xl: "410px" }}
      maxWidth={{ base: "410px", xl: "none" }}
      alignSelf={{ base: "center", md: "auto" }}
      flexShrink={0}
      bg="surfacePrimary"
      border="1px solid"
      borderColor="accentLight"
      borderRadius="22px"
      overflow="hidden"
    >
      {factors.map((factor, index) => (
        <Box key={factor.title} width="100%">
          <Flex
            direction="column"
            align="flex-start"
            gap="6px"
            px={{ base: "16px", xl: "24px" }}
            py="19px"
          >
            <Text
              fontFamily="body"
              fontSize="14px"
              lineHeight="15px"
              fontWeight="600"
              color="textPrimary"
            >
              {factor.title}
            </Text>

            <Text
              fontFamily="body"
              fontSize="12px"
              lineHeight="17px"
              color="textSubtle"
            >
              {factor.description}
            </Text>
          </Flex>

          {index < factors.length - 1 && <Box height="1px" bg="border" />}
        </Box>
      ))}
    </Flex>
  );
}
