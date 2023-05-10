import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Box w='100%' h='60px' background='#00000022'>
      <Flex justifyContent='center' alignItems='center'>
        <Heading>Dio Bank</Heading>
      </Flex>
    </Box>
  );
};
