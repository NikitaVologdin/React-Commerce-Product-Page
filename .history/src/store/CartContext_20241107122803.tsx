import { createContext, ReactNode, useState } from "react";

interface ICartProviderProps {
  children: ReactNode;
}

export const cartContext = createContext({});

export default function CartContextProvider({ children }: ICartProviderProps) {
  const [items, setItems] = useState([]);

  function addItemToCart(item) {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  }

  return <cartContext.Provider value={{}}>{children}</cartContext.Provider>;
}
