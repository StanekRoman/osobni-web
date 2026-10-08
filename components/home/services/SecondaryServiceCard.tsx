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

  return (
    <Flex
      asChild
      flex="1"
      minHeight="142px"
      align="center"
      gap="24px"
      px="28px"
      py="26px"
      bg={index % 2 === 0 ? "surfaceSecondary" : "surfacePrimary"}
      border="1px solid"
      borderColor={index === 2 ? "accentLight" : "#E6E7EB"}
      borderRadius={
        index === 0 ? "0 28px 0 0" : index === 3 ? "0 0 28px 0" : "0"
      }
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
          borderRadius="15px"
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
            fontSize="23px"
            lineHeight="25px"
            fontWeight="600"
          >
            {title}
          </Heading>

          <Text fontSize="14px" lineHeight="21px" color="textSubtle">
            {description}
          </Text>
        </Flex>

        <Box color="accent" opacity="0" _groupHover={{ opacity: "1" }}>
          <LuArrowRight size={18} />
        </Box>
      </Link>
    </Flex>
  );
}
