import NextLink from "next/link";
import { Link, Stack, Text } from "@chakra-ui/react";

type FooterNavigationProps = {
  title: string;
  items: readonly {
    label: string;
    href: string;
  }[];
};

export default function FooterNavigation({
  title,
  items,
}: FooterNavigationProps) {
  return (
    <Stack gap="md">
      <Text textStyle="eyebrowSmall" color="textLight">
        {title}
      </Text>

      <Stack gap="sm">
        {items.map((item) => (
          <Link
            key={item.href}
            asChild
            width="fit-content"
            textStyle="bodySmall"
            color="textSubtleLight"
            textDecoration="none"
            transition="opacity 150ms ease"
            _hover={{ opacity: 0.7 }}
          >
            <NextLink href={item.href}>{item.label}</NextLink>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
}
