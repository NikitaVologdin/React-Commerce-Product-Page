import { useContext } from "react";
import { type ICartItemProps } from "../../types/cart";
import { cartContext } from "../../store/CartContext";

export default function CartItem({ item }: ICartItemProps) {
  const { title, thumbnails, price, quantity, discount } = item;
  function calculateTotal(
    price: number,
    quantity: number,
    discount: number | null
  ) {
    if (discount) return (price * quantity * discount) / 100;
    return price * quantity;
  }
  const total = calculateTotal(price, quantity, discount);

  const ctx = useContext(cartContext);
  function removeFromCartHandler() {
    ctx.removeItemFromCart(item);
  }
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
