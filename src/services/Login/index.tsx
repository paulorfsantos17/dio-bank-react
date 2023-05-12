import { api } from "../../api";

export const login = async (email: string): Promise<boolean> => {
  const data: any = await api;

  const response = email === data.email ? true : false;

  return response;
};
