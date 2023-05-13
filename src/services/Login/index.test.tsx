import { useContext, useState } from "react";
import { login } from ".";

describe("login", () => {
  const mockEmail = "paulo@dio.me";
  const mockPassword = "123456";

  it("Deve exibir um alert com boas vidas caso o email seja valido.", async () => {
    const response = await login(mockEmail, mockPassword);
    expect(response).toBeTruthy();
  });

  it(`Deve exibir um erro caso o email seja inválido`, async () => {
    const response = await login("email@invalido.com", mockPassword);
    expect(response).toBeFalsy();
  });

  it("Deve exibir um erro caso a senha seja inválida", async () => {
    const response = await login(mockEmail, "senhainvalida");
    expect(response).toBeFalsy();
  });
});
