"use client";

import { useRef, useState } from "react";
import NextLink from "next/link";
import { Box, Button, HStack, Link, Menu, Portal } from "@chakra-ui/react";
import { LuArrowRight, LuChevronDown } from "react-icons/lu";

import { headerCta, navigation } from "../navigation";

export default function DesktopNavigation() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 120);
  };

  return (
    <HStack gap="32px">
      <HStack as="nav" aria-label="Hlavní navigace" gap="30px">
        {navigation.map((item) => {
          if (!item.children) {
            return (
              <Link
                key={item.href}
                asChild
                textStyle="nav"
                color="textPrimary"
                textDecoration="none"
              >
                <NextLink href={item.href}>{item.label}</NextLink>
              </Link>
            );
          }

          return (
            <Menu.Root
              key={item.href}
              open={servicesOpen}
              onOpenChange={({ open }) => {
                setServicesOpen(open);
              }}
              positioning={{
                placement: "bottom-start",
              }}
            >
              <Box
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <HStack gap="4px">
                  <Link
                    asChild
                    textStyle="nav"
                    color="textPrimary"
                    textDecoration="none"
                  >
                    <NextLink href={item.href}>{item.label}</NextLink>
                  </Link>

                  <Menu.Trigger asChild>
                    <Box
                      as="button"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                      color="textPrimary"
                      aria-label={`Otevřít menu ${item.label}`}
                    >
                      <LuChevronDown
                        size={14}
                        style={{
                          transform: servicesOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 150ms ease",
                        }}
                      />
                    </Box>
                  </Menu.Trigger>
                </HStack>
              </Box>

              <Portal>
                <Menu.Positioner>
                  <Menu.Content
                    minW="240px"
                    p="sm"
                    bg="surfacePrimary"
                    borderRadius="md"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    {item.children.map((child) => (
                      <Menu.Item
                        key={child.href}
                        value={child.href}
                        asChild
                        cursor="pointer"
                      >
                        <NextLink href={child.href}>{child.label}</NextLink>
                      </Menu.Item>
                    ))}
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          );
        })}
      </HStack>

      <Button
        asChild
        textStyle="button"
        bg="textPrimary"
        color="textLight"
        borderRadius="md"
      >
        <NextLink href={headerCta.href}>
          <HStack gap="8px">
            <span>{headerCta.label}</span>
            <LuArrowRight size={15} />
          </HStack>
        </NextLink>
      </Button>
    </HStack>
  );
}
