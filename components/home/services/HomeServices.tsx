import { Flex, Heading, Text } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import PrimaryServiceCard from "./PrimaryServiceCard";
import SecondaryServiceCard from "./SecondaryServiceCard";

const secondaryServices = [
  {
    title: "Webové aplikace",
    description:
      "Rozhraní a nástroje, které řeší konkrétní proces místo pouhé prezentace.",
    icon: "app" as const,
    href: "/sluzby/webove-aplikace",
  },
  {
    title: "Automatizace a nástroje",
    description:
      "Propojení služeb a malé utility, které omezí ruční opakovanou práci.",
    icon: "automation" as const,
    href: "/sluzby/automatizace-a-nastroje",
  },
  {
    title: "Redesign webu",
    description:
      "Nová struktura a vizuální směr pro web, který už neodpovídá vašemu podnikání.",
    icon: "redesign" as const,
    href: "/sluzby/redesign-webu",
  },
  {
    title: "Správa a další rozvoj",
    description:
      "Technická péče, obsahové změny a postupné rozšiřování bez stavby od nuly.",
    icon: "maintenance" as const,
    href: "/sluzby/sprava-a-servis",
  },
];

export default function HomeServices() {
  return (
    <Section bg="surfacePrimary" minHeight="1180px" py="144px">
      <Container px="0">
        <Flex direction="column" gap="54px">
          <Flex justify="space-between" align="flex-end" width="100%">
            <Flex direction="column" gap="16px" width="700px">
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
                fontSize="45px"
                lineHeight="49px"
                fontWeight="600"
                color="textPrimary"
              >
                Řešení podle situace
                <br />
                Ne univerzální balíček.
              </Heading>
            </Flex>

            <Text
              width="350px"
              fontSize="16px"
              lineHeight="25px"
              color="textSubtle"
            >
              Od prezentačního webu přes aplikaci až po automatizaci rutinní
              práce.
            </Text>
          </Flex>

          <Flex width="100%" height="650px">
            <PrimaryServiceCard />

            <Flex
              direction="column"
              width="610px"
              height="650px"
              flexShrink={0}
            >
              {secondaryServices.map((service, index) => (
                <SecondaryServiceCard
                  key={service.title}
                  {...service}
                  index={index}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
