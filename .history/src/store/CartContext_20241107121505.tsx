import { createContext, ReactNode } from "react";

export const cartContext = createContext({});

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <cartContext.Provider></cartContext.Provider>;
}
