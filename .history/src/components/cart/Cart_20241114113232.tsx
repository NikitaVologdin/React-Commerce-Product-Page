import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { type ICartProps, type ICartItem } from "../../types/cart";
import CartItem from "./CartItem";
import useScreenSize from "../../hooks/useScreenSize";

export default function Cart({ isCartOpen, setIsCartOpen, items }: ICartProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (isCartOpen) return dialogRef.current?.showModal();
    return dialogRef.current?.close();
  }, [isCartOpen]);

  const isCartNotEmpty = items.length;

  useEffect(() => {
    if (!isCartNotEmpty) {
      dialogRef.current?.close();
      setIsCartOpen(false);
    }
  }, [isCartNotEmpty, setIsCartOpen]);

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
      setIsCartOpen(false);
    }
  }

  return createPortal(
    <dialog
      className={"header__cart cart"}
      ref={dialogRef}
      onClick={closeDialogHandler}
    >
      <h2 className="cart__title">Cart</h2>
      <div className="cart__hr"></div>
      <ul className="cart__list cart-list">
        {isCartNotEmpty ? (
          items.map((item: ICartItem) => {
            return <CartItem item={item} key={item.id} />;
          })
        ) : (
          <li className="cart-list__empty">Your cart is empty.</li>
        )}
      </ul>
      <button className="cart__checkout">checkout</button>
    </dialog>,
    document.body
  );
}
