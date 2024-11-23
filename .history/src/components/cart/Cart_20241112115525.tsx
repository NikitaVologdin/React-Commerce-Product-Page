import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { type ICartProps, type ICartItem } from "../../types/cart";
import CartItem from "./CartItem";
import { motion } from "framer-motion";

export default function Cart({ isCartOpen, setIsCartOpen, items }: ICartProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

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

  // const dialogVariants = {
  //   hidden: { opacity: 0, scale: 0.9 },
  //   visible: { opacity: 1, scale: 1 },
  // };

  return createPortal(
    <motion.dialog
      className={`header__cart cart ${isCartOpen ? "cart_shown" : ""}`}
      ref={dialogRef}
      onClick={closeDialogHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="cart__title">Cart</h2>
      <div className="cart__hr"></div>
      <ul className="cart__list cart-list">
        {isCartNotEmpty ? (
          items.map((item: ICartItem) => {
            return <CartItem item={item} key={item.id} />;
          })
        ) : (
          <p className="cart-list__empty">Your cart is empty.</p>
        )}
      </ul>
      <button className="cart__checkout">checkout</button>
    </motion.dialog>,
    document.body
  );
}
