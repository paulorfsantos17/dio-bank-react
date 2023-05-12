import { Flex } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
  return (
    <Flex
      maxHeight='100%'
      minHeight='82.6%'
      width='100%'
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
        {children}
      </Flex>
    </Flex>
  );
};
