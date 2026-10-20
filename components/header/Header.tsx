import { Box } from "@chakra-ui/react";
import DesktopHeader from "./Desktop/DesktopHeader";
import MobileHeader from "./Mobile/MobileHeader";

export default function Header() {
  return (
    <>
      <Box display={{ base: "none", lg: "block" }}>
        <DesktopHeader />
      </Box>

      <Box display={{ base: "block", lg: "none" }}>
        <MobileHeader />
      </Box>
    </>
  );
}
