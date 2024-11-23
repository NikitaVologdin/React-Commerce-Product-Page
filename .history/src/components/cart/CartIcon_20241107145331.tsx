import { type ICartIconProps } from "../types/cart";

export default function CartIcon({
  isCartOpen,
  setIsCartOpen,
  amount,
}: ICartIconProps) {
  function toggleCartHandler() {
    setIsCartOpen(true);
  }
  return (
    <button
      aria-label={isCartOpen ? "Close cart" : "Open cart"}
      onClick={toggleCartHandler}
      className="header__cart-icon cart-icon"
    >
      <img
        className="cart-icon__img"
        src="/images/icon-cart.svg"
        alt="Cart icon"
      />
      <span className="cart-icon__amount">{amount}</span>
    </button>
  );
}
