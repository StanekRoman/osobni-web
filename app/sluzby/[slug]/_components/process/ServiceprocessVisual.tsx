import { Box, Flex, Text } from "@chakra-ui/react";

import type { ServiceProcessData } from "../../types";

type Props = ServiceProcessData["visual"];

export default function ServiceProcessVisual({ steps }: Props) {
  return (
    <Flex
      as="ol"
      direction="column"
      width="auto"
      minWidth="0"
      m="0"
      p="0"
      listStyleType="none"
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <Flex
            as="li"
            key={step.title}
            align="flex-start"
            gap="22px"
            minHeight={isLast ? "87px" : "120px"}
            py="18px"
          >
            <Flex
              direction="column"
              align="center"
              gap="8px"
              width="34px"
              alignSelf="stretch"
              flexShrink="0"
            >
              <Box
                width="10px"
                height="10px"
                flexShrink="0"
                borderRadius="full"
                bg={index === 0 ? "accent" : "accentLight"}
              />

              {!isLast && (
                <Box
                  width="2px"
                  flex="1"
                  minHeight="40px"
                  bg="accentLight"
                  borderRadius="1px"
                />
              )}
            </Flex>

            <Flex direction="column" gap="7px" minWidth="0">
              <Text
                as="h3"
                fontFamily="heading"
                fontSize="21px"
                lineHeight="23px"
                fontWeight="600"
                color="textPrimary"
              >
                {step.title}
              </Text>

              <Text fontSize="13px" lineHeight="20px" color="textSubtle">
                {step.description}
              </Text>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}
