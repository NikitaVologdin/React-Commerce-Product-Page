import { createContext, ReactNode, useState } from "react";
import { type ICartItem } from "../types/cart";

interface ICartProviderProps {
  children: ReactNode;
}

export const cartContext = createContext({});

export default function CartContextProvider({ children }: ICartProviderProps) {
  const [items, setItems] = useState<ICartItem[]>([]);

  function addItemToCart(item) {
    setItems((prevItems) => {
      const existedItem = prevItems.find((el) => el.id === item.id);
      if (!existedItem) {
        return [...prevItems, item];
      }
      return;
    });
  }

  function removeItemFromCart(item) {
    setItems((prevItems) => {
      const existedItem = prevItems.find((el) => el.id === item.id);
    });
  }

  return <cartContext.Provider value={{}}>{children}</cartContext.Provider>;
}
