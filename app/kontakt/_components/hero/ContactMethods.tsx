import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { LuMail, LuPhone, LuMonitor } from "react-icons/lu";

export default function ContactMethods() {
  return (
    <Flex
      direction="column"
      gap={{ base: "24px", xl: "32px" }}
      width="100%"
      minW="0"
      p={{ base: "24px", md: "24px", xl: "40px" }}
      bg="surfacePrimary"
      border="1px solid"
      borderColor="border"
      borderRadius="20px"
    >
      <Flex direction="column" gap="12px" minW="0">
        <Flex align="center" gap="16px">
          <Box color="accent" flexShrink="0">
            <LuMail size={26} />
          </Box>

          <Heading
            as="h2"
            fontFamily="heading"
            fontSize={{ base: "20px", xl: "24px" }}
            fontWeight="600"
            color="textPrimary"
          >
            E-mail
          </Heading>
        </Flex>

        <Text color="textSubtle" fontSize="16px">
          Napište mi, co potřebujete vyřešit.
        </Text>

        <Link
          href="mailto:info@stanek-roman.cz"
          color="accent"
          fontWeight="600"
          fontSize={{ base: "15px", xl: "17px" }}
          overflowWrap="anywhere"
        >
          info@stanek-roman.cz
        </Link>
      </Flex>

      <Box height="1px" bg="border" />

      <Flex direction="column" gap="12px" minW="0">
        <Flex align="center" gap="16px">
          <Box color="accent" flexShrink="0">
            <LuPhone size={26} />
          </Box>

          <Heading
            as="h2"
            fontFamily="heading"
            fontSize={{ base: "20px", xl: "24px" }}
            fontWeight="600"
            color="textPrimary"
          >
            Telefon
          </Heading>
        </Flex>

        <Text color="textSubtle" fontSize="16px">
          Chcete svůj projekt probrat rovnou? Zavolejte mi.
        </Text>

        <Link
          href="tel:+420774382471"
          color="accent"
          fontWeight="600"
          fontSize={{ base: "15px", xl: "17px" }}
        >
          +420 774 382 471
        </Link>

        <Text color="textSubtle" fontSize="13px" lineHeight="20px">
          Pokud hovor nezvednu, ozvu se vám zpět.
        </Text>
      </Flex>

      <Box height="1px" bg="border" />

      <Flex direction="column" gap="12px" minW="0">
        <Flex align="center" gap="16px">
          <Box color="accent" flexShrink="0">
            <LuMonitor size={26} />
          </Box>

          <Heading
            as="h2"
            fontFamily="heading"
            fontSize={{ base: "20px", xl: "24px" }}
            fontWeight="600"
            color="textPrimary"
          >
            Spolupráce online
          </Heading>
        </Flex>

        <Text color="textSubtle" fontSize="16px" lineHeight="26px">
          Spolupracuji s klienty po celé České republice. Osobní setkání je
          možné po domluvě.
        </Text>
      </Flex>
    </Flex>
  );
}
