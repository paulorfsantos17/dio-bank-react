import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Conta } from "../pages/Conta";
import { ContaInfo } from "../pages/ContaInfo";
import { useContext, useMemo } from "react";
import { AppContext } from "../Providers/AppContext";
import { getAllLocalStorage } from "../services/Storage";

export const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  const PrivateRoutes = () => {
    return (
      <>
        <Routes>
          <Route path='/' element={<Conta />} />
          <Route path='/conta/:id' element={<Conta />} />
          <Route path='/contaInfo' element={<ContaInfo />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </>
    );
  };

  const PublicRoutes = () => {
    return (
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </>
    );
  };

  return <>{isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}</>;
};
