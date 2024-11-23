import { createContext, ReactNode, useState } from "react";

interface ICartProviderProps {
  children: ReactNode;
}

export const cartContext = createContext({});

export default function CartContextProvider({ children }: ICartProviderProps) {
  return <cartContext.Provider></cartContext.Provider>;
}
