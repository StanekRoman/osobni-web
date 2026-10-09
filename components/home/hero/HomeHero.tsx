import { Box, Flex, Text } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function HomeHero() {
  return (
    <>
      <Box as="section" minHeight={{ xl: "820px" }} bg="surfaceSecondary">
        <Container>
          <Flex
            direction={{
              base: "column",
              xl: "row",
            }}
            align="center"
            gap={{
              base: "64px",
              md: "4xl",
              xl: "74px",
            }}
            width="100%"
            height={{ xl: "820px" }}
            py={{
              base: "72px",
              md: "96px",
              xl: "0",
            }}
          >
            <HeroContent />
            <HeroVisual />
          </Flex>
        </Container>
      </Box>

      <Box
        width="100%"
        minHeight={{ base: "auto", xl: "88px" }}
        bg="surfacePrimary"
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="border"
      >
        <Container height="100%">
          <Flex
            minHeight={{ base: "auto", xl: "86px" }}
            direction={{
              base: "column",
              md: "row",
            }}
            align={{
              base: "flex-start",
              md: "center",
            }}
            justify="space-between"
            gap={{
              base: "sm",
              md: "xl",
            }}
            py={{
              base: "lg",
              md: "28px",
              xl: "0",
            }}
          >
            <Text
              fontFamily="heading"
              fontSize="18px"
              lineHeight="18px"
              fontWeight="600"
              color="textPrimary"
              whiteSpace={{ md: "nowrap" }}
            >
              Web nemá být jen hezký.
            </Text>

            <Text
              fontSize={{
                base: "14px",
                md: "16px",
              }}
              lineHeight={{
                base: "22px",
                md: "24px",
                xl: "16px",
              }}
              fontWeight="400"
              color="textSubtle"
              textAlign={{
                base: "left",
                md: "right",
              }}
            >
              Má vysvětlit nabídku, podpořit důvěru a usnadnit kontakt.
            </Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
