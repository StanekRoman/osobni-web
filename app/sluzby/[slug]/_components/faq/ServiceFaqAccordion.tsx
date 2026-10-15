import { Accordion, Box, Flex, Text } from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";

import type { ServiceFaqItem } from "../../types";

interface Props {
  items: readonly ServiceFaqItem[];
}

export default function ServiceFaqAccordion({ items }: Props) {
  return (
    <Accordion.Root
      collapsible
      multiple={false}
      width={{ base: "100%", xl: "650px" }}
      flexShrink="0"
      variant="plain"
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={index}
          value={String(index)}
          borderBottomWidth="1px"
          borderColor="border"
        >
          <Accordion.ItemTrigger
            py={{ base: "20px", md: "24px" }}
            cursor="pointer"
            gap="20px"
          >
            <Flex
              flex="1"
              align="center"
              justify="space-between"
              gap="20px"
              textAlign="left"
            >
              <Text
                fontFamily="heading"
                fontSize={{ base: "16px", md: "17px" }}
                lineHeight={{ base: "24px", md: "25px" }}
                fontWeight="600"
                color="textPrimary"
              >
                {item.question}
              </Text>

              <Accordion.ItemIndicator
                flexShrink="0"
                color="accent"
                _open={{ transform: "rotate(45deg)" }}
              >
                <LuPlus size={20} />
              </Accordion.ItemIndicator>
            </Flex>
          </Accordion.ItemTrigger>

          <Accordion.ItemContent>
            <Accordion.ItemBody pb="24px" pt="0">
              <Box maxWidth="590px">
                <Text fontSize="14px" lineHeight="24px" color="textSubtle">
                  {item.answer}
                </Text>
              </Box>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
