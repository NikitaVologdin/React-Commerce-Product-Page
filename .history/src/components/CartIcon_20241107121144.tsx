import { type ICartProps } from "../types/cart";

export default function CartIcon({
  isCartOpen,
  setIsCartOpen,
  amount,
}: ICartProps) {
  function toggleCartHandler() {
    setIsCartOpen(true);
  }
  return (
    <button
      aria-label={isCartOpen ? "Close cart" : "Open cart"}
      onClick={toggleCartHandler}
      className="header__cart-icon cart-icon"
    >
      <img src="/images/icon-cart.svg" alt="Cart icon" />
      <span></span>
    </button>
  );
}
