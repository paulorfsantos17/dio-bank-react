import { json } from "stream/consumers";

interface IDioBank {
  login: boolean;
}

const dioBank = {
  login: false,
};

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem("diobank");
};

export const createLocalStorage = (): void => {
  localStorage.setItem("diobank", JSON.stringify(dioBank));
};

export const changeLocalStorage = (diobank: IDioBank): void => {
  localStorage.setItem("diobank", JSON.stringify(diobank));
};