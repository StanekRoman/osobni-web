import { Flex, Text } from "@chakra-ui/react";

interface WorkflowNodeProps {
  label: string;
  title: string;
  background?: string;
  borderColor?: string;
}

export default function WorkflowNode({
  label,
  title,
  background = "surfacePrimary",
  borderColor = "border",
}: WorkflowNodeProps) {
  return (
    <Flex
      direction="column"
      justify="center"
      align="flex-start"
      gap="9px"
      width={{ base: "100%", md: "auto" }}
      minWidth={0}
      minHeight={{ base: "74px", md: "auto" }}
      flex={{ base: "none", md: "1" }}
      p="18px"
      bg={background}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="18px"
    >
      <Text
        fontSize="9px"
        lineHeight="9px"
        fontWeight="700"
        letterSpacing="1.1px"
        color="accent"
      >
        {label}
      </Text>

      <Text
        fontSize="15px"
        lineHeight="18px"
        fontWeight="600"
        color="textPrimary"
      >
        {title}
      </Text>
    </Flex>
  );
}
