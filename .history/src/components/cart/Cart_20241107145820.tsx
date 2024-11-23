export default function Cart({ isCartOpen, items }: ICartProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (isCartOpen) return dialogRef.current?.showModal();
    return dialogRef.current?.close();
  }, [isCartOpen]);

  return (
    <dialog className="header__cart cart" ref={dialogRef}>
      <h2 className="cart__title">Cart</h2>
      <div className="cart__hr"></div>
      <ul className="cart__list cart-list">
        {items.map((item: ICartItem) => {
          return (
            <CartItem
              title={item.title}
              img={item.img}
              price={item.price}
              quantity={item.quantity}
              discount={item.discount}
              id={item.id}
            />
          );
        })}
      </ul>
      <button className="cart__checkout">checkout</button>
    </dialog>
  );
}
