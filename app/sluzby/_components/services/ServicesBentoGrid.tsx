import { Box, Flex, Grid, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import ServiceBentoCard from "./ServicesBentoCard";
import { services } from "./services";

export default function ServicesBentoGrid() {
  return (
    <Box
      overflow="hidden"
      borderRadius="28px"
      border="1px solid"
      borderColor="border"
      boxShadow="0 12px 34px rgba(35, 37, 38, 0.035)"
    >
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, minmax(0, 1fr))",
          xl: "repeat(12, minmax(0, 1fr))",
        }}
        gap="0"
      >
        {services.map((service, index) => (
          <Box
            key={service.id}
            minWidth="0"
            minHeight={{
              base: "240px",
              md: service.featured ? "360px" : "270px",
              xl: index < 2 ? "360px" : "270px",
            }}
            gridColumn={{
              base: "1 / -1",
              md: service.featured ? "1 / -1" : "span 1",
              xl: index === 0 ? "span 7" : index === 1 ? "span 5" : "span 4",
            }}
          >
            <ServiceBentoCard service={service} />
          </Box>
        ))}
      </Grid>

      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        gap={{ base: "16px", xl: "40px" }}
        minHeight={{ xl: "105px" }}
        p={{ base: "24px", xl: "28px 34px" }}
        bg="background"
        borderTop="1px solid"
        borderColor="border"
      >
        <Text
          as="h3"
          fontFamily="heading"
          fontSize={{ base: "22px", xl: "25px" }}
          lineHeight="28px"
          fontWeight="600"
          color="textPrimary"
          flexShrink="0"
        >
          Doplňkové služby
        </Text>

        <Text fontSize="14px" lineHeight="21px" color="textSubtle" flex="1">
          Menší navazující práce podle konkrétního projektu.
        </Text>

        <ChakraLink
          asChild
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          minHeight="47px"
          px="24px"
          bg="surfacePrimary"
          border="1px solid"
          borderColor="border"
          borderRadius="sm"
          color="textPrimary"
          textStyle="button"
          textDecoration="none"
          flexShrink="0"
          transition="background-color 150ms ease-in-out"
          _hover={{
            borderColor: "accent",
            bg: "accentSurface",
          }}
        >
          <Link href="/sluzby/doplnkove-sluzby">
            Zjistit více
            <Box color="accent">
              <LuArrowRight size={17} strokeWidth={2} />
            </Box>
          </Link>
        </ChakraLink>
      </Flex>
    </Box>
  );
}
