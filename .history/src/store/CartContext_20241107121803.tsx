import { createContext, ReactNode, useState } from "react";

interface ICartProviderProps {
  children: ReactNode;
}

export const cartContext = createContext({});

export default function CartContextProvider({ children }: ICartProviderProps) {
  const [items, setItems] = useState([]);

  return <cartContext.Provider value={{}}>{children}</cartContext.Provider>;
}
