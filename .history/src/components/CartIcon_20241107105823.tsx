import { type ICartProps } from "../types/cart";

export default function Cart({ isCartOpen, setIsCartOpen }: ICartProps) {
  function toggleCartHandler() {
    setIsCartOpen(true);
  }
  return (
    <button
      aria-label={isCartOpen ? "Close cart" : "Open cart"}
      onClick={toggleCartHandler}
    >
      <img src="/images/icon-cart.svg" alt="Cart icon" />
    </button>
  );
}
