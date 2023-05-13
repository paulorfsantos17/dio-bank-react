import { Center, Heading, Input } from "@chakra-ui/react";
import { Card } from "../../components/Card";
import { login } from "../../services/Login";
import { useContext, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { AppContext } from "../../Providers/AppContext";
import { useNavigate } from "react-router-dom";
import { getAllLocalStorage } from "../../services/Storage";

export const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setIsLoggedIn, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validadeUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);
    if (!loggedIn) {
      return alert("Email ou senha Inválida.");
    } else {
      setIsLoggedIn(true);
      navigate("/conta/1");
    }
  };

  return (
    <Card>
      <Center>
        <Heading size='md'>Faça seu login!</Heading>
      </Center>
      <Input
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder='Password'
        value={password}
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => validadeUser(email, password)} />
    </Card>
  );
};
