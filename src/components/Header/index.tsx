import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../../Providers/AppContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { setIsLoggedIn, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = (): void => {
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <Box w='100%' h='60px' background='#ffffff66'>
      <Flex justifyContent='space-around' alignItems='center' padding={2}>
        <Heading>Dio Bank</Heading>
        {isLoggedIn ? <Button onClick={logout}>Sair</Button> : null}
      </Flex>
    </Box>
  );
};
