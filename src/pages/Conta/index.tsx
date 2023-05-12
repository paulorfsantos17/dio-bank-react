import { useContext, useEffect, useState } from "react";
import { Box, Center, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";

import { CardInfo } from "../../components/CardInfo";

import { api } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../Providers/AppContext";

interface IUserData {
  name: string;
  email: string;
  password: string;
  balance: number;
  id: string;
}

export const Conta = () => {
  const [userData, setUserData] = useState<IUserData>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);

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
    const getData = async () => {
      const data: IUserData | any = await api;
      setUserData(data);
    };
    getData();
  }, [userData]);

  !isLoggedIn && navigate("/");

  if (!userData?.name) {
    return (
      <Center marginTop={12}>
        <Spinner size='xl' color='#fff' />
      </Center>
    );
  }

  if (userData && userData.id !== id) {
    console.log(id);
    navigate("/");
  }

  return (
    <Box height='100%'>
      <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop='16px'>
          <CardInfo
            mainContent={`Bem vindo ${userData?.name}`}
            content={convertDataToString()}
          />
          <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`} />
        </SimpleGrid>
      </Center>
    </Box>
  );
};
