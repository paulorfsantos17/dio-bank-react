import { api } from "../../api";

interface IContaInfo {
  name: string;
  email: string;
}

export const getContaInfo = async (): Promise<IContaInfo> => {
  const response: any = await api;
  const name = response.name;
  const email = response.email;

  return { name, email };
};
