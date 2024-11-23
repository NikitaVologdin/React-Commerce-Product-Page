import { createContext, ReactNode, useState } from "react";
import { type ICartItem } from "../types/cart";

interface ICartProviderProps {
  children: ReactNode;
}

export const cartContext = createContext({});

export default function CartContextProvider({ children }: ICartProviderProps) {
  const [items, setItems] = useState<ICartItem[]>([]);

  function findItemInState(state, itemId) {
    return state.find((el: ICartItem) => el.id === itemId);
  }

  function addItemToCart(item) {
    setItems((prevItems) => {
      const existedItem = prevItems.find((el) => el.id === item.id);
      if (!existedItem) {
        return [...prevItems, item];
      }
      return [...prevItems];
    });
  }

  function removeItemFromCart(item) {
    setItems((prevItems) => {
      const existedItem = prevItems.find((el) => el.id === item.id);
      if (existedItem) {
        setItems((prevItems) => {
          const index = prevItems.findIndex((el) => el.id === item.id);
          return [...prevItems].splice(index, 1);
        });
      }
      return [...prevItems];
    });
  }

  return <cartContext.Provider value={{}}>{children}</cartContext.Provider>;
}
