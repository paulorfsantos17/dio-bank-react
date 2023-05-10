import { login } from "."

describe('login', () => {
  it('Deve exibir um alert com boas vidas', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    login()
    expect(mockAlert).toHaveBeenCalledWith('Bem vindo!')
  })
})