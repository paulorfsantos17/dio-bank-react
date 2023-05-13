import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { AppContextProvider } from "./Providers/AppContext";
import { MainRoutes } from "./routes";
import { createLocalStorage, getAllLocalStorage } from "./services/Storage";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
