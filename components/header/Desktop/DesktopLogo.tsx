import Image from "next/image";
import NextLink from "next/link";

import logo from "@/public/logo-underline-256x75-transparent.png";

export default function DesktopLogo() {
  return (
    <NextLink href="/" aria-label="Roman Staněk - domů">
      <Image
        src={logo}
        alt="Roman Staněk"
        width={256}
        height={75}
        priority
        style={{
          width: "auto",
          height: "50px",
        }}
      />
    </NextLink>
  );
}
