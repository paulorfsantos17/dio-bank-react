import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Box } from "@chakra-ui/react";

interface ILayout {
  children?: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <Box backgroundColor='#9413dc' height='100vh'>
      <Header />

      {children}

      <Footer />
    </Box>
  );
};
