import { createContext, useEffect, useState } from "react";
import { isLocation } from "../../services/IsLocation";

export interface IAppContext {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);
export const AppContextProvider = ({ children }: any) => {
  const isValidaStorage = isLocation();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isValidaStorage);

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
