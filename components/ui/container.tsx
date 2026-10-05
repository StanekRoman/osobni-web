import { Box, type BoxProps } from "@chakra-ui/react";

export function Container(props: BoxProps) {
  return (
    <Box
      width="100%"
      maxWidth={"container"}
      mx={"auto"}
      px={{ base: "lg", md: "xl" }}
      {...props}
    />
  );
}
