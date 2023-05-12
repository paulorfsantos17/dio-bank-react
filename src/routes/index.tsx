import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Conta } from "../pages/Conta";
import { ContaInfo } from "../pages/ContaInfo";
import { useContext } from "react";
import { AppContext } from "../Providers/AppContext";

export const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {isLoggedIn && (
        <>
          <Route path='/conta/:id' element={<Conta />} />
          <Route path='/contaInfo' element={<ContaInfo />} />
        </>
      )}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};
