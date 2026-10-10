import { Box, Flex, Text } from "@chakra-ui/react";

type OutcomeCardProps = {
  title: string;
  description: string;
  accent: string;
  left: string;
  top: string;
  tabletLeft: string;
  tabletTop: string;
  zIndex: number;
};

export default function OutcomeCard({
  title,
  description,
  accent,
  left,
  top,
  tabletLeft,
  tabletTop,
  zIndex,
}: OutcomeCardProps) {
  return (
    <Flex
      as="article"
      position={{
        base: "relative",
        md: "absolute",
      }}
      left={{
        base: "auto",
        md: tabletLeft,
        xl: left,
      }}
      top={{
        base: "auto",
        md: tabletTop,
        xl: top,
      }}
      zIndex={zIndex}
      direction="column"
      justify="center"
      align="flex-start"
      gap={{
        base: "20px",
        md: "lg",
      }}
      width={{
        base: "100%",
        md: "404px",
      }}
      height={{
        base: "auto",
        md: "310px",
      }}
      minHeight={{
        base: "auto",
        md: "310px",
      }}
      p={{
        base: "28px",
        md: "60px 60px 60px 30px",
      }}
      bg="surfacePrimary"
      border="1px solid"
      borderColor="border"
      boxShadow="0 8px 30px rgba(35, 37, 38, 0.035)"
      borderRadius="md"
    >
      <Box
        width="42px"
        height="4px"
        bg={accent}
        borderRadius="2px"
        flexShrink={0}
      />

      <Text
        as="h3"
        width={{
          base: "100%",
          md: "312px",
        }}
        fontFamily="heading"
        fontSize={{
          base: "22px",
          md: "24px",
          xl: "26px",
        }}
        lineHeight={{
          base: "28px",
          md: "30px",
        }}
        fontWeight="600"
        color="textPrimary"
      >
        {title}
      </Text>

      <Text
        width={{
          base: "100%",
          md: "312px",
        }}
        fontSize={{
          base: "14px",
          md: "15px",
        }}
        lineHeight={{
          base: "22px",
          md: "23px",
        }}
        fontWeight="400"
        color="textSubtle"
      >
        {description}
      </Text>
    </Flex>
  );
}
