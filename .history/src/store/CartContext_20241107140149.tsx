import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { type ICartItem } from "../types/cart";

interface ICartProviderProps {
  children: ReactNode;
}

interface ICartContext {
  items: ICartItem[];
  addItemToCart: (item: ICartItem) => Dispatch<SetStateAction<ICartItem[]>>;
  removeItemFromCart: (
    item: ICartItem
  ) => Dispatch<SetStateAction<ICartItem[]>>;
  increaseQuantity: (id: string) => Dispatch<SetStateAction<ICartItem[]>>;
  decreaseQuantity: (id: string) => Dispatch<SetStateAction<ICartItem[]>>;
}

export const cartContext = createContext<ICartContext>({
  items: [{ title: "", price: 0, quantity: 0, discount: 0, id: "" }],
  addItemToCart: (item: ICartItem) => {},
});

export default function CartContextProvider({ children }: ICartProviderProps) {
  const [items, setItems] = useState<ICartItem[]>([]);

  function findItemInState(state: ICartItem[], itemId: string) {
    return state.find((el: ICartItem) => el.id === itemId);
  }

  function addItemToCart(item) {
    setItems((prevItems) => {
      const existedItem = findItemInState(prevItems, item.id);
      if (!existedItem) {
        return [...prevItems, item];
      }
      return [...prevItems];
    });
  }

  function removeItemFromCart(item) {
    setItems((prevItems) => {
      const existedItem = findItemInState(prevItems, item.id);
      if (existedItem) {
        setItems((prevItems) => {
          const index = prevItems.findIndex((el) => el.id === item.id);
          return [...prevItems].splice(index, 1);
        });
      }
      return [...prevItems];
    });
  }

  function increaseQuantity(id) {
    setItems((prevItems) => {
      const existedItem = findItemInState(prevItems, id);
      if (existedItem) ++existedItem.quantity;
      return [...prevItems];
    });
  }
  function decreaseQuantity(id) {
    setItems((prevItems) => {
      const existedItem = findItemInState(prevItems, id);
      if (existedItem) --existedItem.quantity;
      return [...prevItems];
    });
  }

  return <cartContext.Provider value={{}}>{children}</cartContext.Provider>;
}
