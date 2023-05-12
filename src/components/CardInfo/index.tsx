import { Flex, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent: string;
  content: string;
}

export const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <Flex
      backgroundColor='#ffffff22'
      minHeight='150px'
      width='320px'
      flexDirection='column'
      gap='8px'
      alignItems='center'
      justifyContent='center'
      borderRadius='16px'
      border='2px'
      borderColor='#ffffff88'>
      <Text color='#fff' fontWeight='bold' fontSize='lg'>
        {mainContent}
      </Text>
      <Text color='#fff'>{content}</Text>
    </Flex>
  );
};
