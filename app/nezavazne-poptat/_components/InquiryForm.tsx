"use client";

import {
  Box,
  Button,
  chakra,
  Field,
  Flex,
  Heading,
  Input,
  NativeSelect,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { LuArrowRight, LuCheck, LuPaperclip } from "react-icons/lu";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import {
  ATTACHMENT_ACCEPT,
  BUDGET_OPTIONS,
  SERVICE_OPTIONS,
} from "../lib/inquiry-config";
import { useInquiryForm } from "../hooks/useInquiryForm";

export function InquiryForm() {
  const {
    formRef,
    errors,
    isSubmitting,
    isSuccess,
    submitError,
    handleSubmit,
    clearFieldError,
    resetSuccess,
  } = useInquiryForm();

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

          <chakra.form
            as="form"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            borderWidth="1px"
            borderColor="border"
            borderRadius="20px"
            p={{ base: "20px", md: "32px", xl: "48px" }}
          >
            {isSuccess ? (
              <Flex
                direction="column"
                align="center"
                textAlign="center"
                gap="20px"
                py={{ base: "32px", md: "48px" }}
              >
                <Box color="accent">
                  <LuCheck size={48} />
                </Box>

                <Heading
                  as="h3"
                  fontFamily="heading"
                  fontSize={{ base: "24px", md: "32px" }}
                  color="textPrimary"
                >
                  Poptávka byla odeslána.
                </Heading>

                <Text color="textSubtle" fontSize="16px">
                  Děkuji za zprávu. Ozvu se vám co nejdříve.
                </Text>

                <Button type="button" variant="outline" onClick={resetSuccess}>
                  Odeslat další poptávku
                </Button>
              </Flex>
            ) : (
              <Flex
                direction="column"
                gap={{ base: "24px", md: "28px", xl: "32px" }}
              >
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  gap={{ base: "24px", md: "20px", xl: "24px" }}
                >
                  <Field.Root required invalid={!!errors.name}>
                    <Field.Label>
                      Jméno <Field.RequiredIndicator />
                    </Field.Label>
                    <Input
                      name="name"
                      placeholder="Vaše jméno"
                      autoComplete="name"
                      onChange={() => clearFieldError("name")}
                    />
                    <Field.ErrorText>{errors.name}</Field.ErrorText>
                  </Field.Root>

                  <Field.Root required invalid={!!errors.email}>
                    <Field.Label>
                      E-mail <Field.RequiredIndicator />
                    </Field.Label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="vas@email.cz"
                      autoComplete="email"
                      onChange={() => clearFieldError("email")}
                    />
                    <Field.ErrorText>{errors.email}</Field.ErrorText>
                  </Field.Root>
                </SimpleGrid>

                <Field.Root required invalid={!!errors.serviceType}>
                  <Field.Label>
                    Typ služby <Field.RequiredIndicator />
                  </Field.Label>
                  <NativeSelect.Root>
                    <NativeSelect.Field
                      name="serviceType"
                      defaultValue=""
                      onChange={() => clearFieldError("serviceType")}
                    >
                      <option value="" disabled>
                        Vyberte typ služby
                      </option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                  </NativeSelect.Root>
                  <Field.ErrorText>{errors.serviceType}</Field.ErrorText>
                </Field.Root>

                <Field.Root required invalid={!!errors.message}>
                  <Field.Label>
                    Stručný popis projektu <Field.RequiredIndicator />
                  </Field.Label>
                  <Textarea
                    name="message"
                    placeholder="Co potřebujete vyřešit?"
                    minH={{ base: "140px", md: "150px", xl: "160px" }}
                    resize="vertical"
                    onChange={() => clearFieldError("message")}
                  />
                  <Field.ErrorText>{errors.message}</Field.ErrorText>
                </Field.Root>

                <Box height="1px" bg="border" />

                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  gap={{ base: "24px", md: "20px", xl: "24px" }}
                >
                  <Field.Root invalid={!!errors.phone}>
                    <Field.Label>Telefon</Field.Label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Volitelné"
                      autoComplete="tel"
                      onChange={() => clearFieldError("phone")}
                    />
                    <Field.ErrorText>{errors.phone}</Field.ErrorText>
                  </Field.Root>

                  <Field.Root invalid={!!errors.budget}>
                    <Field.Label>Orientační rozpočet</Field.Label>
                    <NativeSelect.Root>
                      <NativeSelect.Field
                        name="budget"
                        defaultValue=""
                        onChange={() => clearFieldError("budget")}
                      >
                        {BUDGET_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </NativeSelect.Field>
                      <NativeSelect.Indicator />
                    </NativeSelect.Root>
                    <Field.ErrorText>{errors.budget}</Field.ErrorText>
                  </Field.Root>

                  <Field.Root invalid={!!errors.websiteUrl}>
                    <Field.Label>Současný web</Field.Label>
                    <Input
                      name="websiteUrl"
                      type="text"
                      placeholder="Volitelné"
                      onChange={() => clearFieldError("websiteUrl")}
                    />
                    <Field.ErrorText>{errors.websiteUrl}</Field.ErrorText>
                  </Field.Root>

                  <Field.Root invalid={!!errors.timeframe}>
                    <Field.Label>Požadovaný termín</Field.Label>
                    <Input
                      name="timeframe"
                      placeholder="Volitelné"
                      onChange={() => clearFieldError("timeframe")}
                    />
                    <Field.ErrorText>{errors.timeframe}</Field.ErrorText>
                  </Field.Root>
                </SimpleGrid>

                <Field.Root invalid={!!errors.attachment}>
                  <Field.Label>Příloha</Field.Label>

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
                        accept={ATTACHMENT_ACCEPT}
                        minW="0"
                        width="100%"
                        height="auto"
                        p="1"
                        border="none"
                        fontSize="14px"
                        color="textSubtle"
                        onChange={() => clearFieldError("attachment")}
                      />
                    </Flex>
                  </Box>

                  <Field.ErrorText>{errors.attachment}</Field.ErrorText>
                </Field.Root>

                <Input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  position="absolute"
                  left="-9999px"
                  width="1px"
                  height="1px"
                  opacity={0}
                />

                {submitError && (
                  <Box
                    role="alert"
                    borderWidth="1px"
                    borderColor="red.300"
                    bg="red.50"
                    color="red.700"
                    borderRadius="10px"
                    p="16px"
                    fontSize="14px"
                  >
                    {submitError}
                  </Box>
                )}

                <Flex justify="flex-start" pt="8px">
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    loadingText="Odesílání..."
                    disabled={isSubmitting}
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

                <Text fontSize="13px" lineHeight="1.7" color="textSubtle">
                  Odesláním formuláře berete na vědomí zpracování osobních údajů
                  za účelem vyřízení vaší poptávky. Podrobnosti najdete v{" "}
                  <Link
                    href="/ochrana-osobnich-udaju"
                    style={{
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    zásadách ochrany osobních údajů
                  </Link>
                  .
                </Text>
              </Flex>
            )}
          </chakra.form>
        </Box>
      </Container>
    </Section>
  );
}
