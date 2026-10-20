import Image from "next/image";
import NextLink from "next/link";

export default function DesktopLogo() {
  return (
    <NextLink href="/" aria-label="Roman Staněk - domů">
      <Image
        src="/logo-underline-256x75-transparent.png"
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
