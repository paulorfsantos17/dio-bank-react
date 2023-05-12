import { useContext, useState } from "react";
import { login } from ".";
const setIsLoggedIn = jest.fn();

const mockNavigate = jest.fn();

describe("login", () => {
  const mockEmail = "paulo@dio.me";

  it("Deve exibir um alert com boas vidas caso o email seja valido.", async () => {
    const response = await login(mockEmail);
    expect(response).toBeTruthy();
  });

  it(`Deve exibirum erro caso o email seja inválido`, async () => {
    const response = await login("email@invalido.com");
    expect(response).toBeFalsy();
  });
});
