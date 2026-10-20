import { Box, Flex, Heading, List, Text } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { privacyPolicy, privacyPolicySections } from "../privacy-policy";

export default function PrivacyPolicy() {
  return (
    <Section bg="background" py={{ base: "60px", md: "80px", xl: "120px" }}>
      <Container>
        <Flex
          direction="column"
          maxW="1000px"
          mx="auto"
          gap={{ base: "40px", xl: "48px" }}
        >
          <Flex direction="column" gap="12px">
            <Text
              color="accent"
              fontSize="13px"
              fontWeight="700"
              letterSpacing="1.2px"
              textTransform="uppercase"
            >
              {privacyPolicy.introduction}
            </Text>

            <Heading
              as="h1"
              fontFamily="heading"
              fontSize={{
                base: "36px",
                md: "48px",
                xl: "56px",
              }}
              fontWeight="600"
              color="textPrimary"
            >
              {privacyPolicy.title}
            </Heading>
          </Flex>

          <Flex direction="column" gap={{ base: "32px", xl: "40px" }}>
            {privacyPolicySections.map((section) => (
              <Box key={section.id} id={section.id}>
                <Heading
                  as="h2"
                  fontFamily="heading"
                  fontSize={{
                    base: "22px",
                    md: "26px",
                    xl: "30px",
                  }}
                  fontWeight="600"
                  color="textPrimary"
                  mb="12px"
                >
                  {section.title}
                </Heading>

                <Flex direction="column" gap="12px">
                  {section.paragraphs?.map((paragraph, index) => (
                    <Text
                      key={`${section.id}-${index}`}
                      color="textSubtle"
                      fontSize="16px"
                      lineHeight="1.8"
                    >
                      {paragraph.text}
                    </Text>
                  ))}

                  {section.items && (
                    <List.Root
                      as="ul"
                      pl="24px"
                      gap="8px"
                      color="textSubtle"
                      fontSize="16px"
                      lineHeight="1.8"
                    >
                      {section.items.map((item) => (
                        <List.Item key={item}>{item}</List.Item>
                      ))}
                      {section.footer && (
                        <Text
                          color="textSubtle"
                          fontSize="16px"
                          lineHeight="1.8"
                        >
                          {section.footer}
                        </Text>
                      )}
                    </List.Root>
                  )}
                </Flex>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}
