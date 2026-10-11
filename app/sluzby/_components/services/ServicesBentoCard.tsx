import { Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import type { Service } from "./services";

interface ServiceBentoCardProps {
  service: Service;
}

export default function ServiceBentoCard({ service }: ServiceBentoCardProps) {
  const {
    title,
    description,
    href,
    icon: Icon,
    iconLabel,
    background,
    iconBackground,
    borderColor,
    dark = false,
    featured = false,
  } = service;

  return (
    <ChakraLink
      asChild
      display="block"
      width="100%"
      height="100%"
      textDecoration="none"
      color="inherit"
      _hover={{ textDecoration: "none" }}
    >
      <Link href={href}>
        <Flex
          direction="column"
          align="flex-start"
          gap="20px"
          width="100%"
          height="100%"
          minWidth="0"
          p={{ base: "24px", md: "32px 30px" }}
          bg={background}
          border="1px solid"
          borderColor={borderColor}
          transition="filter 150ms ease-in-out"
          _hover={{ filter: "brightness(0.97)" }}
        >
          <Flex
            align="center"
            justify="center"
            width="50px"
            height="50px"
            flexShrink="0"
            bg={iconBackground}
            borderRadius="15px"
            color="textPrimary"
          >
            {Icon ? (
              <Icon size={19} strokeWidth={2.5} aria-hidden="true" />
            ) : (
              <Text fontSize="19px" lineHeight="19px" fontWeight="700">
                {iconLabel}
              </Text>
            )}
          </Flex>

          <Text
            as="h3"
            fontFamily="heading"
            fontSize={{ base: "22px", xl: "25px" }}
            lineHeight={{ base: "27px", xl: "28px" }}
            fontWeight="600"
            color={dark ? "textLight" : "textPrimary"}
          >
            {title}
          </Text>

          <Text
            fontSize="14px"
            lineHeight="22px"
            color={dark ? "#D6D8DD" : "textSubtle"}
          >
            {description}
          </Text>

          {featured && (
            <Flex
              align="center"
              justify="center"
              gap="10px"
              minHeight="45px"
              px="24px"
              bg="accent"
              borderRadius="sm"
              color="textLight"
              fontSize="14px"
              fontWeight="600"
              transition="background 150ms ease"
              _hover={{ bg: "accentDark" }}
            >
              Detail služby
              <LuArrowRight size={17} strokeWidth={2} />
            </Flex>
          )}
        </Flex>
      </Link>
    </ChakraLink>
  );
}
