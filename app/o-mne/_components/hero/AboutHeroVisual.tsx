import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { LuArrowUpRight, LuCode, LuWorkflow } from "react-icons/lu";

const areas = [
  {
    title: "Weby",
    description: "Moderní webové stránky pro prezentaci vašeho podnikání.",
    icon: LuArrowUpRight,
  },
  {
    title: "Aplikace",
    description: "Webové aplikace a nástroje podle vašich potřeb.",
    icon: LuCode,
  },
  {
    title: "Automatizace",
    description: "Méně rutinní práce díky automatizaci opakovaných úkolů.",
    icon: LuWorkflow,
  },
];

export default function AboutHeroVisual() {
  return (
    <Box
      flex="1"
      minWidth={0}
      width="100%"
      bg="surfaceDark"
      color="textLight"
      borderRadius={{ base: "22px", xl: "28px" }}
      p={{ base: "20px", md: "28px", xl: "32px" }}
    >
      <Text
        fontSize={{ base: "10px", md: "11px" }}
        fontWeight="700"
        letterSpacing={{ base: "1.4px", md: "2px" }}
        lineHeight="1.6"
        color="textLightSecondary"
        mb="18px"
      >
        OD NÁVRHU K FUNKČNÍMU VÝSLEDKU
      </Text>

      <Heading
        as="h2"
        fontFamily="heading"
        fontSize={{ base: "25px", md: "30px" }}
        lineHeight="1.2"
        fontWeight="600"
        mb={{ base: "24px", md: "28px" }}
      >
        S čím vám mohu pomoci
      </Heading>

      <Flex direction="column" gap="12px">
        {areas.map((area) => {
          const Icon = area.icon;

          return (
            <Flex
              key={area.title}
              align="center"
              gap={{ base: "12px", md: "16px" }}
              bg="surfaceDarkSecondary"
              borderRadius="18px"
              p={{ base: "16px", md: "20px" }}
            >
              <Flex
                width={{ base: "40px", md: "44px" }}
                height={{ base: "40px", md: "44px" }}
                align="center"
                justify="center"
                bg="accent"
                borderRadius="14px"
                flexShrink={0}
              >
                <Icon size={21} />
              </Flex>

              <Box minWidth={0}>
                <Text
                  fontFamily="heading"
                  fontSize={{ base: "16px", md: "18px" }}
                  fontWeight="600"
                  mb="4px"
                >
                  {area.title}
                </Text>

                <Text
                  fontSize="13px"
                  lineHeight="20px"
                  color="textLightSecondary"
                >
                  {area.description}
                </Text>
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}
