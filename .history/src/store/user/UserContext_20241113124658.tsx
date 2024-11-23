import { createContext } from "react";
import { IUserContext } from "../../types/user";

export const userContext = createContext<IUserContext>({
  avatar: "",
});
