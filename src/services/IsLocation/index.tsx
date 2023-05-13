import { getAllLocalStorage } from "../Storage";

export const isLocation = (): boolean => {
  const storage = getAllLocalStorage();
  if (storage) {
    return true;
  }
  return false;
};
