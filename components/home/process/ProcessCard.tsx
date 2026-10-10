import { Box, Flex, Text } from "@chakra-ui/react";

import type { ProcessStep } from "./process";

interface ProcessCardProps {
  step: ProcessStep;
}

export default function ProcessCard({ step }: ProcessCardProps) {
  return (
    <Flex
      as="article"
      direction="column"
      align="flex-start"
      gap="20px"
      width="100%"
      minHeight={{ base: "280px", md: "250px", lg: "330px" }}
      height={{ base: "auto", md: "250px", lg: "330px" }}
      flexShrink={0}
      p={{ base: "26px 24px", md: "30px 28px" }}
      bg={step.background}
      border="1px solid"
      borderColor={step.borderColor}
      borderRadius="26px"
      boxShadow="0 14px 34px rgba(35, 37, 38, 0.045)"
      transform={`rotate(${step.rotation})`}
    >
      <Box position="relative" width="100%" height="3px" flexShrink={0}>
        <Box
          position="absolute"
          top="0"
          right="0"
          width="74px"
          height="3px"
          bg={step.progressColor}
          borderRadius="2px"
        />
      </Box>

      <Text
        fontSize="12px"
        lineHeight="14px"
        fontWeight="700"
        letterSpacing="0.5px"
        color="textSubtle"
      >
        {step.eyebrow}
      </Text>

      <Text
        as="h3"
        fontFamily="heading"
        fontSize="27px"
        lineHeight="29px"
        fontWeight="600"
        color="textPrimary"
      >
        {step.title}
      </Text>

      <Text
        fontSize="14px"
        lineHeight="22px"
        fontWeight="400"
        color="textSubtle"
      >
        {step.description}
      </Text>
    </Flex>
  );
}
