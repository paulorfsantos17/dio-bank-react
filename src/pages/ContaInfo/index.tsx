import { Center, Flex, Heading } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Providers/AppContext";
import { useNavigate } from "react-router-dom";
import { getContaInfo } from "../../services/getContaInfo";

interface ICardInfo {
  name: string;
  email: string;
}

export const ContaInfo = () => {
  const [dateContaInfo, setDateContaInfo] = useState<ICardInfo>();

  useEffect(() => {
    const getDataContaInfo = async () => {
      const contaInfo: ICardInfo = await getContaInfo();
      setDateContaInfo(contaInfo);
    };
    getDataContaInfo();
  }, []);

  return (
    <Flex
      background='#fff'
      width='50%'
      height={200}
      marginTop={5}
      marginX='auto'
      borderRadius={5}
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      gap={5}>
      <Heading>{dateContaInfo?.name}</Heading>
      <Heading>{dateContaInfo?.email}</Heading>
    </Flex>
  );
};
