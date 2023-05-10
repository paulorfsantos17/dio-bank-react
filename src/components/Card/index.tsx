import React from "react";
import { login } from "../../services/Login";

import {
  Button,
  Center,
  Flex,
  Input,
} from "@chakra-ui/react";

export const Card = () => {
  return (
    <Flex
      minHeight='100vh'
      width='100vw'
      backgroundColor='#9413dc'
      padding='25px'
      alignItems='center'
      justifyContent='center'>
      <Flex
        minWidth='60%'
        backgroundColor='#fff'
        borderRadius='25px'
        padding='15px'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        gap='16px'>
        <Center>Faça login</Center>

        <Input placeholder='Email' />
        <Input placeholder='Password' />
        <Button
          onClick={login}
          size='lg'
          minWidth='100%'
          backgroundColor='#9413dc'
          _hover={{ bgColor: "#9413dc77" }}
          transitionDuration='.5s'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};
