import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import ProcessCard from "./ProcessCard";
import { processSteps } from "./process";

export default function HomeProcess() {
  return (
    <Section
      bg="background"
      minHeight={{ xl: "980px" }}
      py={{ base: "72px", md: "100px", xl: "148px" }}
    >
      <Container>
        <Flex direction="column" gap={{ base: "48px", xl: "64px" }}>
          {/* Heading */}
          <Flex
            direction={{ base: "column", xl: "row" }}
            justify="space-between"
            align={{ base: "flex-start", xl: "flex-end" }}
            gap={{ base: "24px", xl: "0" }}
          >
            <Flex
              direction="column"
              align="flex-start"
              gap="16px"
              maxWidth={{ xl: "720px" }}
            >
              <Text
                fontSize="13px"
                lineHeight="13px"
                fontWeight="700"
                letterSpacing="1.3px"
                color="accent"
              >
                Jak probíhá spolupráce
              </Text>

              <Heading
                as="h2"
                fontFamily="heading"
                fontSize={{
                  base: "32px",
                  md: "38px",
                  xl: "45px",
                }}
                lineHeight={{
                  base: "38px",
                  md: "44px",
                  xl: "49px",
                }}
                fontWeight="600"
                color="textPrimary"
              >
                Jeden plynulý proces. Každý krok navazuje na předchozí.
              </Heading>
            </Flex>

            <Text
              maxWidth="350px"
              fontSize="16px"
              lineHeight="25px"
              color="textSubtle"
            >
              Žádné předávání mezi pěti lidmi. Víte, kde projekt je, co řešíme a
              co následuje.
            </Text>
          </Flex>

          {/* Desktop */}
          <Flex
            display={{ base: "none", xl: "flex" }}
            width="1160px"
            height="470px"
            align="flex-start"
          >
            {processSteps.map((step, index) => (
              <Box
                key={step.title}
                width="330px"
                height="450px"
                flexShrink={0}
                pt={step.offset}
                ml={index === 0 ? "0" : "-58px"}
                position="relative"
                zIndex={step.zIndex}
              >
                <ProcessCard step={step} />
              </Box>
            ))}
          </Flex>

          {/* Mobile/Tablet */}
          <Box
            display={{ md: "flex", xl: "none" }}
            position="relative"
            justifyItems="center"
            width="min(100%, 520px)"
            height="945px"
            mx="auto"
          >
            {processSteps.map((step) => (
              <Box
                key={step.title}
                position="absolute"
                left={{ base: "none", md: step.tabletLeft }}
                top={step.tabletTop}
                zIndex={step.zIndex}
                width={{ base: "320px", md: "380px" }}
              >
                <ProcessCard step={step} />
              </Box>
            ))}
          </Box>
        </Flex>
      </Container>
    </Section>
  );
}
