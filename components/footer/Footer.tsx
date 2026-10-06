import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import { Container } from "../ui/container";
import FooterNavigation from "./FooterNavigation";
import { footerOther, footerServices } from "./navigationData";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <Box as="footer" bg="surfaceDark" color="textLight">
      <Container>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1.5fr 1fr 1fr",
          }}
          gap={{
            base: "3xl",
            md: "2xl",
          }}
          pt={{ base: "3xl", md: "4xl" }}
          pb="3xl"
        >
          <Stack gap="sm">
            <Text
              fontFamily="heading"
              fontSize="24px"
              fontWeight="600"
              lineHeight="1.2"
            >
              Roman Staněk
            </Text>
            <Text maxW="320px" textStyle="bodySmall" color="textSubtleLight">
              Weby, aplikace a praktická digitální řešení pro živnostníky a malé
              firmy.
            </Text>
          </Stack>
          <FooterNavigation title="Služby" items={footerServices} />

          <FooterNavigation title="Další" items={footerOther} />
        </Grid>
        <Flex
          direction={{
            base: "column",
            md: "row",
          }}
          align={{
            base: "flex-start",
            md: "center",
          }}
          justify="space-between"
          gap="md"
          py="lg"
          borderTopWidth="1px"
          borderColor="surfaceDarkSecondary"
        >
          <Text textStyle="bodySmall" color="textSubtleLight">
            © Roman Staněk {new Date().getFullYear()}
          </Text>
          <Flex
            direction={{
              base: "column",
              sm: "row",
            }}
            gap={{
              base: "sm",
              sm: "lg",
            }}
          >
            <FooterLink href="/obchodni-podminky">Obchodní podmínky</FooterLink>
            <FooterLink href="/ochrana-osobnich-udaju">
              Ochrana osobních údajů
            </FooterLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
