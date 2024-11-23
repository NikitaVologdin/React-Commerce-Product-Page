import { IStockItem } from "./stock";

export interface ICartProps {
  isCartOpen: boolean;
  setCartIsOpen: (value: boolean) => void;
  items: ICartItem[];
}

export interface ICartIconProps {
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
  amount: number;
}

export interface ICartItem extends IStockItem {
  quantity: number;
}

export interface ICartContext {
  items: ICartItem[];
  addItemToCart: (item: ICartItem) => void;
  removeItemFromCart: (item: ICartItem) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export interface ICartItemProps {
  title: string;
  thumbnails: string[];
  price: number;
  quantity: number;
  discount: number | null;
  id: string;
}
