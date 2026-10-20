import { Box, Flex } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";

import DesktopLogo from "./DesktopLogo";
import DesktopNavigation from "./DesktopNavigation";

export default function DesktopHeader() {
  return (
    <Box as="header" width="100%" bg="background">
      <Container>
        <Flex minH="80px" align="center" justify="space-between">
          <DesktopLogo />
          <DesktopNavigation />
        </Flex>
      </Container>
    </Box>
  );
}
