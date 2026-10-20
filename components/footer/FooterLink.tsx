import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      asChild
      width="fit-content"
      textStyle="bodySmall"
      color="textSubtleLight"
      textDecoration="none"
      transition="opacity 150ms ease"
      _hover={{
        opacity: 0.7,
      }}
    >
      <NextLink href={href}>{children}</NextLink>
    </Link>
  );
}
