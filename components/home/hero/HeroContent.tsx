import { Box, Flex, Grid, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { LuArrowRight, LuCheck } from "react-icons/lu";

const benefits = [
  "Jasná struktura",
  "Moderní vzhled",
  "Rychlé načítání",
  "Snadná správa",
] as const;

export default function HeroContent() {
  return (
    <Flex
      direction="column"
      align={{
        base: "flex-start",
        md: "center",
        xl: "flex-start",
      }}
      gap={{
        base: "lg",
        md: "28px",
        xl: "lg",
      }}
      width={{ base: "100%", md: "610px" }}
      maxWidth="610px"
      flexShrink="0"
    >
      <Flex
        align="center"
        justify="center"
        height="27px"
        px="13px"
        bg="accentLight"
        borderRadius="999px"
      >
        <Text textStyle="label" color="accentDark">
          Weby, které dávají smysl
        </Text>
      </Flex>

      <Box width="100%">
        <Text
          as="h1"
          m="0"
          fontFamily="heading"
          fontSize={{
            base: "36px",
            md: "44px",
            xl: "52px",
          }}
          lineHeight={{
            base: "40px",
            md: "48px",
            xl: "55px",
          }}
          fontWeight="600"
          letterSpacing={{
            base: "-0.7px",
            md: "-1px",
            xl: "-1.2px",
          }}
          color="textPrimary"
          textAlign={{
            base: "center",
            md: "center",
            xl: "left",
          }}
        >
          Aby lidé rychle pochopili,
          <Box as="span" display="block" color="accent">
            proč si vybrat právě vás.
          </Box>
        </Text>
      </Box>

      <Text
        width={{ base: "100%", md: "560px" }}
        maxWidth="560px"
        fontSize={{
          base: "16px",
          md: "17px",
        }}
        lineHeight={{
          base: "25px",
          md: "27px",
        }}
        fontWeight="400"
        color="textSubtle"
        textAlign={{
          base: "center",
          md: "center",
          xl: "left",
        }}
      >
        Navrhuji a tvořím přehledné weby na míru. Od struktury a vizuálního
        návrhu až po technickou realizaci a další správu.
      </Text>

      <Flex
        direction={{
          base: "column",
          md: "row",
        }}
        align="center"
        justify={{
          md: "center",
          xl: "flex-start",
        }}
        gap="14px"
        width={{
          base: "100%",
          md: "100%",
          xl: "auto",
        }}
      >
        <ChakraLink
          asChild
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          width={{
            base: "100%",
            md: "186px",
          }}
          height={{
            base: "48px",
            md: "45px",
          }}
          px="lg"
          bg="accent"
          borderRadius="sm"
          color="textLight"
          textStyle="button"
          textDecoration="none"
          _hover={{
            bg: "accentDark",
            textDecoration: "none",
          }}
        >
          <Link href="/nezavazne-poptat">
            <Box as="span" whiteSpace="nowrap">
              Převést váš web
            </Box>

            <LuArrowRight size={17} strokeWidth={2} />
          </Link>
        </ChakraLink>

        <ChakraLink
          asChild
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          width={{
            base: "100%",
            md: "174px",
          }}
          height={{
            base: "48px",
            md: "47px",
          }}
          px="lg"
          bg="surfacePrimary"
          border="1px solid"
          borderColor="border"
          borderRadius="sm"
          color="textPrimary"
          textStyle="button"
          textDecoration="none"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Link href="/sluzby">
            <Box as="span">Služby</Box>

            <Box as="span" display="flex" color="accent">
              <LuArrowRight size={17} strokeWidth={2} />
            </Box>
          </Link>
        </ChakraLink>
      </Flex>

      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(4, auto)",
        }}
        columnGap={{
          base: "md",
          md: "20px",
        }}
        rowGap={{
          base: "md",
          md: "0",
        }}
        width={{
          base: "100%",
          md: "600px",
        }}
        justifyContent={{
          xl: "start",
        }}
      >
        {benefits.map((benefit) => (
          <Flex key={benefit} align="center" gap="xs" height="12px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="accent"
              flexShrink="0"
            >
              <LuCheck size={12} strokeWidth={3} />
            </Box>

            <Text
              fontSize="11px"
              lineHeight="11px"
              fontWeight="500"
              color="textSubtle"
              whiteSpace="nowrap"
            >
              {benefit}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
}
