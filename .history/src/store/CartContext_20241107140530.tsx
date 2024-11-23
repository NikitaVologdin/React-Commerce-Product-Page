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
// Dispatch<SetStateAction<ICartItem[]>>;
// Dispatch<SetStateAction<ICartItem[]>>
interface ICartContext {
  items: ICartItem[];
  addItemToCart: (item: ICartItem) => void;
  removeItemFromCart: (item: ICartItem) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export const cartContext = createContext<ICartContext>({
  items: [{ title: "", price: 0, quantity: 0, discount: 0, id: "" }],
  addItemToCart: (item: ICartItem) => {},
  removeItemFromCart: (item: ICartItem) => {},
  increaseQuantity: (id: string) => {},
  decreaseQuantity: (id: string) => {},
});

export default function CartContextProvider({ children }: ICartProviderProps) {
  const [items, setItems] = useState<ICartItem[]>([]);

  function findItemInState(state: ICartItem[], itemId: string) {
    return state.find((el: ICartItem) => el.id === itemId);
  }

  function addItemToCart(item: ICartItem) {
    setItems((prevItems) => {
      const existedItem = findItemInState(prevItems, item.id);
      if (!existedItem) {
        return [...prevItems, item];
      }
      return [...prevItems];
    });
  }

  function removeItemFromCart(item: ICartItem) {
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

  function increaseQuantity(id: string) {
    setItems((prevItems) => {
      const existedItem = findItemInState(prevItems, id);
      if (existedItem) ++existedItem.quantity;
      return [...prevItems];
    });
  }
  function decreaseQuantity(id: string) {
    setItems((prevItems) => {
      const existedItem = findItemInState(prevItems, id);
      if (existedItem) --existedItem.quantity;
      return [...prevItems];
    });
  }

  return (
    <cartContext.Provider
      value={{
        items,
        addItemToCart,
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
