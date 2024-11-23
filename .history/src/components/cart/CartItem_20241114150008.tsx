import { useContext, useEffect, useState } from "react";
import { type ICartItemProps } from "../../types/cart";
import { cartContext } from "../../store/cart/CartContext";
import useAnimate from "../../hooks/useAnimate";

export default function CartItem({ item }: ICartItemProps) {
  const [isRemoved, setIsRemoved] = useState(false);
  const { title, thumbnails, price, quantity } = item;
  const total = price * quantity;

  const ctx = useContext(cartContext);

  function removeFromCartHandler() {
    ctx.removeItemFromCart(item);
  }

  useEffect(() => {
    const isPresent = ctx.items.find((el) => el.id === item.id);
    if (!isPresent) setIsRemoved(true);
  }, [ctx.items.length]);

  return (
    <li className="cart-list__item cart-item">
      <img
        className="cart-item__img"
        src={thumbnails[0]}
        width={50}
        height={50}
        alt="Shows what sneakers are this cart item"
      />
      <div className="cart-item__info">
        <h3 className="cart-item__title">{title}</h3>
        <p className="cart-item__paragraph">
          {`${price} x ${quantity} `}
          <span className="cart-item__paragraph_total"> ${total}</span>
        </p>
      </div>
      <button
        className="cart-item__delete"
        aria-label={`Press to delete ${title} from the cart`}
        onClick={removeFromCartHandler}
      >
        <img
          className="cart-item__delete_img"
          src="/images/icon-delete.svg"
          alt=""
          width={14}
          height={16}
        />
      </button>
    </li>
  );
}
