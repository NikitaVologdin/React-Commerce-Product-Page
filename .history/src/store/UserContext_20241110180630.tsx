import { createContext } from "react";
import { ICartContext } from "../types/cart";

export const cartContext = createContext<>({
  avatar: string,
});
