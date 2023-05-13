import { useEffect, useState } from "react";
import { Box, Center, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";

import { CardInfo } from "../../components/CardInfo";

import { IConta, api } from "../../api";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Conta = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<IConta>();

  const convertDataToString = (): string => {
    const actualDate = new Date();
    const day = actualDate.getDate();
    const mount = actualDate.getMonth() + 1;
    const year = actualDate.getFullYear();
    const hour = actualDate.getHours();
    const minutes = actualDate.getMinutes();

    const actualDateToString = `${day}/${mount}/${year} ${hour}:${minutes}`;

    return actualDateToString;
  };

  useEffect(() => {
    const getUser = async () => {
      const data: any = await api;
      setUserData(data);
    };
    getUser();
  }, []);

  if (!userData) {
    return (
      <Center marginTop={12}>
        <Spinner size='xl' color='#fff' />
      </Center>
    );
  }

  if (userData && userData.id !== id) {
    navigate("/");
  }

  return (
    <Box height='100%'>
      <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop='16px'>
          <Link to='/contaInfo'>
            <CardInfo
              mainContent={`Bem vindo ${userData?.name}`}
              content={convertDataToString()}
            />
          </Link>
          <CardInfo mainContent='Saldo' content={`R$ ${userData?.balance}`} />
        </SimpleGrid>
      </Center>
    </Box>
  );
};
