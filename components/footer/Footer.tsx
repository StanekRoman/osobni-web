import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import { Container } from "../ui/container";
import FooterLink from "./FooterLink";
import FooterNavigation from "./FooterNavigation";
import { footerOther, footerServices } from "./navigationData";

export default function Footer() {
  return (
    <Box as="footer" bg="surfaceDark" color="textLight">
      <Container>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 1.5fr",
          }}
          gap="2xl"
          pt={{ base: "2xl", md: "4xl" }}
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

          <Stack
            direction="row"
            justify="center"
            align="flex-start"
            gap={{ base: "xl", md: "2xl" }}
            width="100%"
          >
            <FooterNavigation title="Služby" items={footerServices} />
            <FooterNavigation title="Další" items={footerOther} />
          </Stack>
        </Grid>
        <Flex
          direction={{
            base: "column",
            md: "row",
          }}
          align={{
            base: "center",
            md: "center",
          }}
          justify="space-between"
          gap="md"
          py="lg"
          borderTopWidth="1px"
          borderColor="surfaceDarkSecondary"
        >
          <Flex
            direction="row"
            align="center"
            justify="center"
            width={{ base: "100%", md: "auto" }}
            gap="lg"
          >
            <FooterLink href="/obchodni-podminky">Obchodní podmínky</FooterLink>
            <FooterLink href="/ochrana-osobnich-udaju">
              Ochrana osobních údajů
            </FooterLink>
          </Flex>
          <Text
            textStyle="bodySmall"
            color="textSubtleLight"
            alignItems="flex-start"
          >
            © Roman Staněk {new Date().getFullYear()}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
