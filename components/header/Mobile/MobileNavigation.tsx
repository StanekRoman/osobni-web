"use client";

import { useState } from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  Collapsible,
  Drawer,
  Flex,
  HStack,
  IconButton,
  Link,
  Portal,
  Stack,
} from "@chakra-ui/react";
import { LuArrowRight, LuChevronDown, LuMenu, LuX } from "react-icons/lu";

import { headerCta, navigation } from "../navigation";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeNavigation = () => {
    setOpen(false);
  };

  return (
    <Drawer.Root
      open={open}
      onOpenChange={({ open }) => {
        setOpen(open);
      }}
      placement="end"
    >
      <Drawer.Trigger asChild>
        <IconButton
          aria-label="Otevřít navigaci"
          variant="ghost"
          color="textPrimary"
        >
          <LuMenu size={24} />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />

        <Drawer.Positioner>
          <Drawer.Content bg="background" maxW="360px">
            <Drawer.Header>
              <Flex width="100%" align="center" justify="space-between">
                <Box />

                <Drawer.CloseTrigger asChild>
                  <IconButton
                    aria-label="Zavřít navigaci"
                    variant="ghost"
                    color="textPrimary"
                  >
                    <LuX size={24} />
                  </IconButton>
                </Drawer.CloseTrigger>
              </Flex>
            </Drawer.Header>

            <Drawer.Body>
              <Stack gap="lg">
                {navigation.map((item) => {
                  if (!item.children) {
                    return (
                      <Link
                        key={item.href}
                        asChild
                        color="textPrimary"
                        textDecoration="none"
                        onClick={closeNavigation}
                      >
                        <NextLink href={item.href}>{item.label}</NextLink>
                      </Link>
                    );
                  }

                  return (
                    <Collapsible.Root
                      key={item.href}
                      open={servicesOpen}
                      onOpenChange={({ open }) => {
                        setServicesOpen(open);
                      }}
                    >
                      <Flex align="center" justify="space-between">
                        <Link
                          asChild
                          color="textPrimary"
                          textDecoration="none"
                          onClick={closeNavigation}
                        >
                          <NextLink href={item.href}>{item.label}</NextLink>
                        </Link>

                        <Collapsible.Trigger asChild>
                          <IconButton
                            aria-label={
                              servicesOpen ? "Skrýt služby" : "Zobrazit služby"
                            }
                            variant="ghost"
                            size="sm"
                            color="textPrimary"
                          >
                            <LuChevronDown
                              size={18}
                              style={{
                                transform: servicesOpen
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                                transition: "transform 150ms ease",
                              }}
                            />
                          </IconButton>
                        </Collapsible.Trigger>
                      </Flex>

                      <Collapsible.Content>
                        <Stack gap="md" pt="md" pl="md">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              asChild
                              color="textPrimary"
                              textDecoration="none"
                              onClick={closeNavigation}
                            >
                              <NextLink href={child.href}>
                                {child.label}
                              </NextLink>
                            </Link>
                          ))}
                        </Stack>
                      </Collapsible.Content>
                    </Collapsible.Root>
                  );
                })}

                <Button
                  asChild
                  width="100%"
                  textStyle="button"
                  bg="textPrimary"
                  color="textLight"
                  borderRadius="md"
                >
                  <NextLink href={headerCta.href} onClick={closeNavigation}>
                    <HStack gap="8px">
                      <span>{headerCta.label}</span>
                      <LuArrowRight size={15} />
                    </HStack>
                  </NextLink>
                </Button>
              </Stack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
