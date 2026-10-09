import Link from "next/link";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { LuArrowRight, LuPlus, LuRefreshCw } from "react-icons/lu";

type ServiceIcon = "app" | "automation" | "redesign" | "maintenance";

type SecondaryServiceCardProps = {
  title: string;
  description: string;
  icon: ServiceIcon;
  href: string;
  index: number;
};

export default function SecondaryServiceCard({
  title,
  description,
  icon,
  href,
  index,
}: SecondaryServiceCardProps) {
  const isCyan = icon === "automation";

  const desktopRadius =
    index === 0 ? "0 28px 0 0" : index === 3 ? "0 0 28px 0" : "0";

  return (
    <Flex
      asChild
      minWidth={0}
      height="100%"
      minHeight={{ base: "auto", md: "185px", xl: "142px" }}
      align={{
        base: "flex-start",
        md: "flex-start",
        xl: "center",
      }}
      direction={{
        base: "column",
        xl: "row",
      }}
      gap={{ base: "md", md: "18px", xl: "lg" }}
      px={{ base: "lg", md: "26px", xl: "28px" }}
      py={{ base: "lg", md: "26px" }}
      bg={index % 2 === 0 ? "surfaceSecondary" : "surfacePrimary"}
      border="1px solid"
      borderColor={index === 2 ? "accentLight" : "border"}
      borderRadius={{
        base: "md",
        md: "lg",
        xl: desktopRadius,
      }}
      boxShadow="0 8px 26px rgba(35, 37, 38, 0.025)"
      color="textPrimary"
      textDecoration="none"
      transition="background 0.2s ease"
      _hover={{ bg: "accentSurface" }}
    >
      <Link href={href}>
        <Flex
          width="50px"
          height="50px"
          flexShrink={0}
          align="center"
          justify="center"
          bg={isCyan ? "blue" : "accentLight"}
          color={isCyan ? "#155E75" : "accentDark"}
          borderRadius="icon"
          fontSize="19px"
          fontWeight="700"
        >
          {icon === "app" && "APP"}
          {icon === "automation" && "AUT"}
          {icon === "redesign" && <LuRefreshCw size={19} />}
          {icon === "maintenance" && <LuPlus size={19} />}
        </Flex>

        <Flex direction="column" gap="9px" flex="1" minWidth={0}>
          <Heading
            as="h3"
            fontFamily="heading"
            fontSize={{
              base: "21px",
              md: "22px",
              xl: "23px",
            }}
            lineHeight={{
              base: "25px",
              xl: "25px",
            }}
            fontWeight="600"
          >
            {title}
          </Heading>

          <Text fontSize="14px" lineHeight="21px" color="textSubtle">
            {description}
          </Text>
        </Flex>

        <Box
          color="accent"
          display={{ base: "none", xl: "block" }}
          opacity="0"
          _groupHover={{ opacity: "1" }}
        >
          <LuArrowRight size={18} />
        </Box>
      </Link>
    </Flex>
  );
}
