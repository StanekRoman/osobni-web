import { Box, Flex, Text } from "@chakra-ui/react";
import { LuArrowUpRight, LuDiamond, LuCheck } from "react-icons/lu";

import type { ServiceHeroData } from "../../types";

const stepVisuals = [
  {
    icon: LuArrowUpRight,
    background: "accentSurface",
    color: "accent",
  },
  {
    icon: LuDiamond,
    background: "blue",
    color: "#0891B2",
  },
  {
    icon: LuCheck,
    background: "accentSurface",
    color: "accent",
  },
] as const;

export default function ServiceHeroVisual({
  title,
  steps,
}: ServiceHeroData["visual"]) {
  return (
    <Box
      width={{ base: "auto", xl: "100%" }}
      maxWidth="440px"
      alignSelf={{ base: "center", xl: "auto" }}
      flexShrink={0}
      bg="surfacePrimary"
      border="1px solid"
      borderColor="border"
      borderRadius="lg"
      boxShadow="0 20px 45px rgba(35, 37, 38, 0.06)"
      p={{ base: "22px", md: "28px" }}
    >
      <Text
        fontFamily="body"
        fontSize="11px"
        lineHeight="16px"
        fontWeight="700"
        letterSpacing="1px"
        color="accent"
        mb="24px"
      >
        {title}
      </Text>

      <Flex direction="column">
        {steps.map((step, index) => {
          const { icon: Icon, background, color } = stepVisuals[index];
          const isLast = index === steps.length - 1;

          return (
            <Flex
              key={step.title}
              gap={{ base: "12px", md: "16px" }}
              align="stretch"
            >
              <Flex
                direction="column"
                align="center"
                flexShrink={0}
                width="44px"
              >
                <Flex
                  width="44px"
                  height="44px"
                  align="center"
                  justify="center"
                  bg={background}
                  color={color}
                  borderRadius="icon"
                >
                  <Icon size={20} strokeWidth={2} aria-hidden="true" />
                </Flex>

                {!isLast && (
                  <Box
                    width="1px"
                    flex="1"
                    minHeight="28px"
                    my="6px"
                    bg="border"
                  />
                )}
              </Flex>

              <Flex
                direction="column"
                gap="5px"
                pt="4px"
                pb={isLast ? "0" : "32px"}
                minWidth="0"
              >
                <Text
                  fontFamily="heading"
                  fontSize="16px"
                  lineHeight="21px"
                  fontWeight="600"
                  color="textPrimary"
                >
                  {step.title}
                </Text>

                <Text
                  fontFamily="body"
                  fontSize="13px"
                  lineHeight="20px"
                  color="textSubtle"
                >
                  {step.description}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}
