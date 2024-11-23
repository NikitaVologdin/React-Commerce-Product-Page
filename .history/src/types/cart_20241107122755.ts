import { IStockItem } from "./stock";

export interface ICartProps {
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
  amount: number;
}

export interface ICartItem extends IStockItem {
  quantity: number;
}
