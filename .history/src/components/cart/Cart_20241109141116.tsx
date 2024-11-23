import { useRef, useEffect } from "react";
import { type ICartProps, type ICartItem } from "../../types/cart";
import CartItem from "./CartItem";

export default function Cart({ isCartOpen, items }: ICartProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isCartOpen) return dialogRef.current?.showModal();
    return dialogRef.current?.close();
  }, [isCartOpen]);

  const isCartNotEmpty = items.length;

  function closeDialogHandler(
    event: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) {
    let isInDialog;
    const rect = dialogRef.current?.getBoundingClientRect();
    if (rect)
      isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      dialogRef.current?.close();
    }
  }

  return (
    <dialog
      className="header__cart cart"
      ref={dialogRef}
      onClick={closeDialogHandler}
    >
      <h2 className="cart__title">Cart</h2>
      <div className="cart__hr"></div>
      <ul className="cart__list cart-list">
        {isCartNotEmpty ? (
          items.map((item: ICartItem) => {
            return (
              <CartItem
                title={item.title}
                thumbnails={item.thumbnails}
                price={item.price}
                quantity={item.quantity}
                discount={item.discount}
                id={item.id}
                key={item.id}
              />
            );
          })
        ) : (
          <p className="cart-list__empty">Your cart is empty.</p>
        )}
      </ul>
      <button className="cart__checkout">checkout</button>
    </dialog>
  );
}
