import {
  IDioBank,
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from ".";

const createDioBank = {};
const setDioBank: IDioBank = {
  name: "Paulo Santos",
  balance: 3000.0,
  id: "1",
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
      JSON.stringify(createDioBank)
    );
  });

  it("Deve alterar o valor do objeto no local storage", () => {
    changeLocalStorage(setDioBank);

    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(setDioBank)
    );
  });
});
