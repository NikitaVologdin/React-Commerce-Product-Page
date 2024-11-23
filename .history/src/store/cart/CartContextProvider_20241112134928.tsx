import { ReactNode, useState } from "react";
import { type ICartItem } from "../../types/cart";
import { cartContext } from "./CartContext";

interface ICartProviderProps {
  children: ReactNode;
}

export default function CartContextProvider({ children }: ICartProviderProps) {
  const [items, setItems] = useState<ICartItem[]>([]);

  function findItemInState(state: ICartItem[], itemId: string) {
    return state.find((el: ICartItem) => el.id === itemId);
  }

  function addItemToCart(item: ICartItem) {
    const itemInCart = findItemInState(items, item.id);
    if (itemInCart) {
      return setItems((prevItems) => {
        const itemInPrevState = findItemInState(prevItems, item.id);
        if (itemInPrevState) itemInPrevState.quantity = item.quantity;
        return [...prevItems];
      });
    }
    return setItems((prevItems) => {
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
          prevItems.splice(index, 1);
          return [...prevItems];
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

  function getItemsAmount() {
    return items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  }
  return (
    <cartContext.Provider
      value={{
        items,
        addItemToCart,
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
        getItemsAmount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
