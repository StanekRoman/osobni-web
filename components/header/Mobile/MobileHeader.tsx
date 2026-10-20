import { Box, Flex } from "@chakra-ui/react";

import { Container } from "@/components/ui/container";

import MobileLogo from "./MobileLogo";
import MobileNavigation from "./MobileNavigation";

export default function MobileHeader() {
  return (
    <Box as="header" width="100%" bg="background">
      <Container>
        <Flex minH="72px" align="center" justify="space-between">
          <MobileLogo />
          <MobileNavigation />
        </Flex>
      </Container>
    </Box>
  );
}
