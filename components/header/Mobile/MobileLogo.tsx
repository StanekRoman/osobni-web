import Image from "next/image";
import NextLink from "next/link";

import Logo from "@/public/signature-75x75logo.png";

export default function MobileLogo() {
  return (
    <NextLink href="/" aria-label="Roman Staněk – domů">
      <Image
        src={Logo}
        alt="Roman Staněk"
        width={75}
        height={75}
        priority
        style={{
          width: "48px",
          height: "48px",
        }}
      />
    </NextLink>
  );
}
