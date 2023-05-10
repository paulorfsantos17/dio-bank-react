import React from "react";

import {
  Button,
  Center,
  ChakraProvider,
  Flex,
  Input,
} from "@chakra-ui/react";

import { Header } from "./components/Header";
import { Card } from "./components/Card";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Card />
    </ChakraProvider>
  );
}

export default App;
