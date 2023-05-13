import { json } from "stream/consumers";

export interface IDioBank {
  id: string;
  name: string;
  balance: number;
}

const dioBank: IDioBank | {} = {};

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem("diobank");
};

export const createLocalStorage = (): void => {
  localStorage.setItem("diobank", JSON.stringify(dioBank));
};

export const changeLocalStorage = (diobank: IDioBank | null): void => {
  localStorage.setItem("diobank", JSON.stringify(diobank));
};
