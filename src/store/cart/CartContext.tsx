import { createContext } from "react";
import { ICartContext } from "../../types/cart";

export const cartContext = createContext<ICartContext>({
  items: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  getItemsAmount: () => {
    return 0;
  },
});
