import { Flex, Text } from "@chakra-ui/react";

import type { ServiceApproachData } from "../../types";

type Props = ServiceApproachData["visual"];

const stepBackgrounds = ["#EDE9FE", "#CFFAFE", "#EDE9FE", "#EDE9FE"] as const;

export default function ServiceApproachVisual({ steps }: Props) {
  return (
    <Flex
      direction="column"
      width={{ base: "100%", xl: "540px" }}
      maxW={{ base: "540px", xl: "none" }}
      alignSelf={{ base: "center", xl: "auto" }}
      flexShrink={0}
    >
      {steps.map((step, index) => {
        const isFirst = index === 0;
        const isLast = index === steps.length - 1;
        const Icon = step.icon;

        return (
          <Flex
            key={step.title}
            align="center"
            gap={{ base: "12px", md: "18px" }}
            height="84px"
            px={{ base: "14px", md: "20px" }}
            py="16px"
            bg="#303235"
            border="1px solid #303235"
            borderTopRadius={isFirst ? "28px" : "0"}
            borderBottomRadius={isLast ? "28px" : "0"}
          >
            <Flex
              width="44px"
              height="44px"
              flexShrink={0}
              align="center"
              justify="center"
              bg={stepBackgrounds[index] ?? "#EDE9FE"}
              borderRadius="12px"
            >
              <Icon
                size={20}
                strokeWidth={2}
                color="#232526"
                aria-hidden="true"
              />
            </Flex>

            <Flex direction="column" align="flex-start" gap="5px" minWidth="0">
              <Text
                fontFamily="body"
                fontSize="16px"
                lineHeight="19px"
                fontWeight="600"
                color="#FFFFFF"
              >
                {step.title}
              </Text>

              <Text
                fontFamily="body"
                fontSize="12px"
                lineHeight="17px"
                color="#D6D8DD"
              >
                {step.description}
              </Text>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}
