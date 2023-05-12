import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from ".";

const dioBank = {
  login: false,
};

describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");

  it("Deve Retornar o objeto do local storage", () => {
    const MockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getAllLocalStorage();
    expect(MockGetItem).toHaveBeenCalledWith("diobank");
  });

  it("Deve criar o objeto do local storage", () => {
    createLocalStorage();

    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });

  it("Deve alterar o valor do objeto no local storage", () => {
    changeLocalStorage({ login: true });

    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify({ login: true })
    );
  });
});
