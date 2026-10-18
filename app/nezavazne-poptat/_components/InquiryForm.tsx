import {
  Box,
  Button,
  Field,
  Flex,
  Heading,
  Input,
  NativeSelect,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { LuArrowRight, LuPaperclip } from "react-icons/lu";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const inputStyles = {
  bg: "background",
  borderColor: "border",
  borderRadius: "10px",
  height: "52px",
  px: "16px",
  fontSize: "16px",
  color: "textPrimary",
  _placeholder: {
    color: "textSubtle",
  },
  _focusVisible: {
    borderColor: "accent",
    outline: "none",
  },
};

const labelStyles = {
  color: "textPrimary",
  fontSize: "15px",
  fontWeight: "600",
  mb: "8px",
};

export function InquiryForm() {
  return (
    <Section bg="background" py={{ base: "60px", md: "80px", xl: "120px" }}>
      <Container>
        <Box maxW="1000px" mx="auto">
          <Flex
            direction="column"
            gap={{ base: "12px", md: "14px", xl: "16px" }}
            mb={{ base: "32px", md: "40px", xl: "48px" }}
          >
            <Text
              color="accent"
              fontSize="13px"
              fontWeight="700"
              letterSpacing="1.2px"
            >
              Formulář
            </Text>

            <Heading
              as="h2"
              fontFamily="heading"
              fontSize={{ base: "32px", md: "40px", xl: "48px" }}
              fontWeight="600"
              lineHeight="1.12"
              letterSpacing={{ base: "-0.8px", xl: "-1px" }}
              color="textPrimary"
            >
              Pár informací pro dobrý začátek.
            </Heading>

            <Text
              color="textSubtle"
              fontSize={{ base: "16px", xl: "18px" }}
              lineHeight={{ base: "26px", xl: "29px" }}
            >
              Povinná jsou jen čtyři pole.
            </Text>
          </Flex>

          <Box
            as="form"
            borderWidth="1px"
            borderColor="border"
            borderRadius="20px"
            p={{ base: "20px", md: "32px", xl: "48px" }}
          >
            <Flex
              direction="column"
              gap={{ base: "24px", md: "28px", xl: "32px" }}
            >
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gap={{ base: "24px", md: "20px", xl: "24px" }}
              >
                <Field.Root required>
                  <Field.Label {...labelStyles}>
                    Jméno <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    name="name"
                    placeholder="Vaše jméno"
                    {...inputStyles}
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label {...labelStyles}>
                    E-mail <Field.RequiredIndicator />
                  </Field.Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="vas@email.cz"
                    {...inputStyles}
                  />
                </Field.Root>
              </SimpleGrid>

              <Field.Root required>
                <Field.Label {...labelStyles}>
                  Typ služby <Field.RequiredIndicator />
                </Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field
                    name="serviceType"
                    defaultValue=""
                    {...inputStyles}
                  >
                    <option value="" disabled>
                      Vyberte typ služby
                    </option>
                    <option value="web">Tvorba webů</option>
                    <option value="app">Webová aplikace</option>
                    <option value="redesign">Redesign</option>
                    <option value="maintenance">Správa</option>
                    <option value="automation">Automatizace</option>
                    <option value="additional">Doplňkové služby</option>
                    <option value="consultation">Konzultace</option>
                    <option value="unknown">Nevím</option>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Field.Root>

              <Field.Root required>
                <Field.Label {...labelStyles}>
                  Stručný popis projektu <Field.RequiredIndicator />
                </Field.Label>
                <Textarea
                  name="message"
                  placeholder="Co potřebujete vyřešit?"
                  minH={{ base: "140px", md: "150px", xl: "160px" }}
                  resize="vertical"
                  bg="background"
                  borderColor="border"
                  borderRadius="10px"
                  p="16px"
                  fontSize="16px"
                  color="textPrimary"
                  _placeholder={{ color: "textSubtle" }}
                  _focusVisible={{
                    borderColor: "accent",
                    outline: "none",
                  }}
                />
              </Field.Root>

              <Box height="1px" bg="border" />

              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gap={{ base: "24px", md: "20px", xl: "24px" }}
              >
                <Field.Root>
                  <Field.Label {...labelStyles}>Telefon</Field.Label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Volitelné"
                    {...inputStyles}
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label {...labelStyles}>
                    Orientační rozpočet
                  </Field.Label>
                  <NativeSelect.Root>
                    <NativeSelect.Field
                      name="budget"
                      defaultValue=""
                      {...inputStyles}
                    >
                      <option value="">Nevím / zatím nemám představu</option>
                      <option value="under-15k">Do 15 000 Kč</option>
                      <option value="15-30k">15 000–30 000 Kč</option>
                      <option value="30-50k">30 000–50 000 Kč</option>
                      <option value="50k-plus">Nad 50 000 Kč</option>
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                  </NativeSelect.Root>
                </Field.Root>

                <Field.Root>
                  <Field.Label {...labelStyles}>Současný web</Field.Label>
                  <Input
                    name="websiteUrl"
                    type="url"
                    placeholder="Volitelné"
                    {...inputStyles}
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label {...labelStyles}>Požadovaný termín</Field.Label>
                  <Input
                    name="timeframe"
                    placeholder="Volitelné"
                    {...inputStyles}
                  />
                </Field.Root>
              </SimpleGrid>

              <Field.Root>
                <Field.Label {...labelStyles}>Příloha</Field.Label>
                <Box
                  borderWidth="1px"
                  borderColor="border"
                  borderRadius="10px"
                  p={{ base: "12px", md: "16px", xl: "20px" }}
                >
                  <Flex align="center" gap="12px" minW="0">
                    <Box flexShrink={0}>
                      <LuPaperclip size={20} />
                    </Box>
                    <Input
                      name="attachment"
                      type="file"
                      minW="0"
                      width="100%"
                      height="auto"
                      p="1"
                      border="none"
                      fontSize="14px"
                      color="textSubtle"
                    />
                  </Flex>
                </Box>
              </Field.Root>

              <Flex justify="center" pt="8px">
                <Button
                  type="button"
                  width={{ base: "100%", md: "auto" }}
                  bg="accent"
                  color="white"
                  borderRadius="10px"
                  px={{ base: "16px", md: "24px", xl: "28px" }}
                  minH="54px"
                  height="auto"
                  py="12px"
                  whiteSpace="normal"
                  textAlign="center"
                  fontWeight="600"
                  _hover={{ opacity: 0.9 }}
                >
                  Odeslat nezávaznou poptávku
                  <LuArrowRight />
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Section>
  );
}
