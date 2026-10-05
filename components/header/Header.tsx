"use client";

import { useBreakpointValue } from "@chakra-ui/react";

import Desktopheader from "./Desktop/DesktopHeader";
import MobileHeader from "./Mobile/MobileHeader";

export default function Header() {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });
  return isMobile ? <MobileHeader /> : <Desktopheader />;
}
