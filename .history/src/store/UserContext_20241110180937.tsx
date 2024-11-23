import { createContext } from "react";
import { IUserContext } from "../types/user";

export const cartContext = createContext<IUserContext>({
  avatar: "",
});
