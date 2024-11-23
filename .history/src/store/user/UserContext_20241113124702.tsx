import { createContext } from "react";
import { type IUserContext } from "../../types/user";

export const userContext = createContext<IUserContext>({
  avatar: "",
});
