import { Box, Flex, Text } from "@chakra-ui/react";
import { HiArrowDown, HiArrowRight } from "react-icons/hi2";

import WorkflowNode from "./WorkflowNode";

export default function AutomationWorkflow() {
  return (
    <Flex
      direction="column"
      gap={{ base: "20px", md: "18px" }}
      width={{ base: "100%", md: "574px" }}
      maxWidth="100%"
      height={{ base: "auto", md: "500px" }}
      flexShrink={0}
      p={{ base: "24px 18px", md: "32px 30px" }}
      bg="surfaceSecondary"
      border="1px solid"
      borderColor="border"
      borderRadius={{ base: "24px", md: "30px" }}
      boxShadow="0 14px 38px rgba(35, 37, 38, 0.035)"
    >
      <Text
        maxWidth="450px"
        fontFamily="heading"
        fontSize={{ base: "20px", md: "22px" }}
        lineHeight={{ base: "26px", md: "26px" }}
        fontWeight="600"
        color="textPrimary"
      >
        Méně ručního přepisování. Více času na práci.
      </Text>

      {/* Vstup a automatické zpracování */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        gap={{ base: "12px", md: "18px" }}
        width="100%"
        height={{ base: "auto", md: "111px" }}
        flexShrink={0}
      >
        <Flex
          direction="column"
          justify="center"
          gap="9px"
          width={{ base: "100%", md: "174px" }}
          height="80px"
          p="20px"
          bg="surfacePrimary"
          border="1px solid"
          borderColor="border"
          borderRadius="18px"
          flexShrink={0}
        >
          <Text
            fontSize="9px"
            lineHeight="9px"
            fontWeight="700"
            letterSpacing="1.2px"
            color="textSubtle"
          >
            PŘÍCHOZÍ
          </Text>

          <Text
            fontSize="16px"
            lineHeight="19px"
            fontWeight="600"
            color="textPrimary"
          >
            E-mail / formulář
          </Text>
        </Flex>

        <Box color="accent" flexShrink={0}>
          <Box display={{ base: "block", md: "none" }}>
            <HiArrowDown size={26} aria-hidden="true" />
          </Box>

          <Box display={{ base: "none", md: "block" }}>
            <HiArrowRight size={26} aria-hidden="true" />
          </Box>
        </Box>

        <Flex
          direction="column"
          justify="center"
          gap="10px"
          width={{ base: "100%", md: "270px" }}
          height="111px"
          flexShrink={0}
          p="22px"
          bg="accent"
          borderRadius="20px"
          boxShadow="0 12px 30px rgba(91, 33, 182, 0.15)"
        >
          <Text
            fontSize="9px"
            lineHeight="9px"
            fontWeight="700"
            letterSpacing="1.2px"
            color="accentLight"
          >
            AUTOMATICKY
          </Text>

          <Text
            fontFamily="heading"
            fontSize="19px"
            lineHeight="24px"
            fontWeight="600"
            color="white"
          >
            Zpracovat a rozhodnout, co se má stát dál.
          </Text>
        </Flex>
      </Flex>

      {/* Šipka k výstupům */}
      <Flex
        justify="center"
        align="center"
        width="100%"
        height="28px"
        flexShrink={0}
        color="accent"
      >
        <HiArrowDown size={28} aria-hidden="true" />
      </Flex>

      {/* Výsledné uzly */}
      <Flex
        direction={{ base: "column", md: "row" }}
        gap="16px"
        width="100%"
        height={{ base: "auto", md: "74px" }}
        flexShrink={0}
      >
        <WorkflowNode label="DATA" title="Google Sheet" />

        <WorkflowNode
          label="AKCE"
          title="Úkol / CRM"
          background="accentSurface"
          borderColor="accentLight"
        />

        <WorkflowNode label="VÝSTUP" title="Potvrzení" />
      </Flex>

      {/* Poznámka */}
      <Flex
        align="center"
        gap="12px"
        width="100%"
        minHeight="48px"
        p="15px 18px"
        bg="accentSurface"
        borderRadius="16px"
      >
        <Box
          width="8px"
          height="8px"
          flexShrink={0}
          bg="accent"
          borderRadius="full"
        />

        <Text fontSize="12px" lineHeight="17px" color="textSubtle">
          Konkrétní řešení se skládá podle procesu, ne podle předem daného
          balíčku.
        </Text>
      </Flex>
    </Flex>
  );
}
