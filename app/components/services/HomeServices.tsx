import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import PrimaryServiceCard from "./PrimaryServiceCard";
import SecondaryServiceCard from "./SecondaryServiceCard";
import { secondaryServices } from "./services";

export default function HomeServices() {
  return (
    <Section
      bg="surfacePrimary"
      minHeight={{ base: "auto", xl: "1180px" }}
      py={{ base: "72px", md: "5xl", xl: "144px" }}
    >
      <Container px={{ base: "20px", md: "xl", xl: "0" }}>
        <Flex direction="column" gap={{ base: "36px", md: "44px", xl: "54px" }}>
          <Flex
            direction={{ base: "column", xl: "row" }}
            justify="space-between"
            align={{ base: "flex-start", xl: "flex-end" }}
            gap={{ base: "20px", md: "lg", xl: "0" }}
            width="100%"
          >
            <Flex
              direction="column"
              gap={{ base: "sm", md: "md" }}
              width={{ base: "100%", xl: "700px" }}
            >
              <Text
                color="accent"
                fontSize="13px"
                lineHeight="13px"
                fontWeight="700"
                letterSpacing="1.3px"
              >
                Služby
              </Text>

              <Heading
                as="h2"
                fontFamily="heading"
                fontSize={{
                  base: "32px",
                  md: "40px",
                  xl: "45px",
                }}
                lineHeight={{
                  base: "38px",
                  md: "46px",
                  xl: "49px",
                }}
                fontWeight="600"
                color="textPrimary"
              >
                Řešení podle situace
                <br />
                Ne univerzální balíček.
              </Heading>
            </Flex>

            <Text
              width={{ base: "100%", md: "520px", xl: "350px" }}
              maxWidth="100%"
              fontSize={{ base: "15px", md: "16px" }}
              lineHeight="25px"
              color="textSubtle"
            >
              Od prezentačního webu přes aplikaci až po automatizaci rutinní
              práce.
            </Text>
          </Flex>

          <Flex
            direction={{ base: "column", xl: "row" }}
            width="100%"
            height={{ base: "auto", xl: "650px" }}
            gap={{ base: "md", md: "20px", xl: "0" }}
          >
            <PrimaryServiceCard />

            <SimpleGrid
              columns={{ base: 1, md: 2, xl: 1 }}
              gap={{ base: "sm", md: "md", xl: "0" }}
              width={{ base: "100%", xl: "610px" }}
              height={{ base: "auto", xl: "650px" }}
              flexShrink={0}
              gridTemplateRows={{
                base: "auto",
                md: "repeat(2, minmax(0, 1fr))",
                xl: "repeat(4, minmax(0, 1fr))",
              }}
            >
              {secondaryServices.map((service, index) => (
                <SecondaryServiceCard
                  key={service.title}
                  {...service}
                  index={index}
                />
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
