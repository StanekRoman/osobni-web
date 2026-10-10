import { Box, Flex, Text } from "@chakra-ui/react";
import { benefits } from "./benefits";

export default function HeroVisual() {
  return (
    <Box
      position="relative"
      width={{
        base: "327px",
        md: "405px",
        xl: "476px",
      }}
      height={{
        base: "330px",
        md: "408px",
        xl: "480px",
      }}
      flexShrink="0"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="476px"
        height="480px"
        transform={{
          base: "scale(0.687)",
          md: "scale(0.85)",
          xl: "none",
        }}
        transformOrigin="top left"
      >
        <Box
          position="absolute"
          width="430px"
          height="350px"
          left="-6px"
          top="-45px"
          bg="rgba(124, 58, 237, 0.055)"
          borderRadius="50%"
        />

        <Box
          position="absolute"
          width="380px"
          height="300px"
          left="38px"
          top="115px"
          bg="surfacePrimary"
          border="1px solid"
          borderColor="border"
          boxShadow="0 22px 54px rgba(91, 33, 182, 0.1)"
          borderRadius="lg"
          transform="rotate(4deg)"
          overflow="hidden"
        >
          <Flex
            align="center"
            gap="6px"
            width="380px"
            height="34px"
            px="14px"
            bg="background"
          >
            <Box boxSize="6px" borderRadius="full" bg="#EF4444" />
            <Box boxSize="6px" borderRadius="full" bg="#F59E0B" />
            <Box boxSize="6px" borderRadius="full" bg="#22C55E" />
          </Flex>

          <Flex
            direction="column"
            align="flex-start"
            gap="18px"
            width="380px"
            height="266px"
            p="lg"
            bg="surfacePrimary"
          >
            <Flex
              align="center"
              justify="center"
              height="27px"
              px="13px"
              bg="accentLight"
              borderRadius="999px"
            >
              <Text textStyle="label" color="accentDark">
                Web, který funguje
              </Text>
            </Flex>

            <Text
              width="220px"
              fontFamily="heading"
              fontSize="24px"
              lineHeight="26px"
              fontWeight="600"
              color="textPrimary"
            >
              Přehledný web,
              <br />
              který přivádí klienty
            </Text>

            <Flex align="flex-start" gap="md" width="332px" height="112px">
              <Flex
                direction="column"
                align="flex-start"
                gap="10px"
                width="160px"
                height="62px"
              >
                <Box
                  width="132px"
                  height="8px"
                  bg="border"
                  borderRadius="4px"
                />

                <Box
                  width="108px"
                  height="8px"
                  bg="border"
                  borderRadius="4px"
                />

                <Box
                  width="74px"
                  height="26px"
                  bg="accent"
                  borderRadius="8px"
                />
              </Flex>

              <Box
                width="156px"
                height="112px"
                bg="accentLight"
                borderRadius="16px"
              />
            </Flex>
          </Flex>
        </Box>

        <Flex
          position="absolute"
          direction="column"
          align="flex-start"
          gap="14px"
          width="250px"
          height="220px"
          left="187px"
          top="296px"
          p="20px"
          bg="surfacePrimary"
          border="1px solid"
          borderColor="border"
          boxShadow="0 16px 40px rgba(35, 37, 38, 0.08)"
          borderRadius="md"
          transform="rotate(-3deg)"
        >
          {benefits.map(
            ({ icon: Icon, title, description, background, color }) => (
              <Flex
                key={title}
                align="center"
                gap="sm"
                width="210px"
                height="50px"
              >
                <Flex
                  align="center"
                  justify="center"
                  width="50px"
                  height="50px"
                  flexShrink="0"
                  bg={background}
                  borderRadius="icon"
                >
                  <Icon size={19} strokeWidth={2} color={color} />
                </Flex>

                <Flex
                  direction="column"
                  align="flex-start"
                  gap="4px"
                  width="148px"
                >
                  <Text
                    fontSize="12px"
                    lineHeight="14px"
                    fontWeight="600"
                    color="textPrimary"
                    whiteSpace="nowrap"
                  >
                    {title}
                  </Text>

                  <Text
                    fontSize="9px"
                    lineHeight="12px"
                    fontWeight="400"
                    color="textSubtle"
                    whiteSpace="nowrap"
                  >
                    {description}
                  </Text>
                </Flex>
              </Flex>
            ),
          )}
        </Flex>
      </Box>
    </Box>
  );
}
