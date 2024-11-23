import { createContext } from "react";
import { ICartContext } from "../types/cart";

export const cartContext = createContext<ICartContext>({
  items: [
    {
      title: "",
      price: 0,
      quantity: 0,
      discount: 0,
      id: "",
      img: [""],
      thumbnails: [""],
    },
  ],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});
