import { api } from "../../api";
import { IDioBank, changeLocalStorage } from "../Storage";

export const login = async (
  email: string,
  password: string
): Promise<boolean> => {
  const data: any = await api;
  const name: string = data.name;
  const balance: number = data.balance;
  const id: string = data.id;

  changeLocalStorage({ name, balance, id });

  let response;

  if (data?.email === email && data?.password === password) {
    response = true;
  } else {
    response = false;
  }

  return response;
};
