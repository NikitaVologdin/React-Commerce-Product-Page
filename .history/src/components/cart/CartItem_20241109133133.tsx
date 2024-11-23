import { type ICartItemProps } from "../../types/cart";

export default function CartItem({
  title,
  thumbnails,
  price,
  quantity,
  discount,
}: ICartItemProps) {
  function calculateTotal(
    price: number,
    quantity: number,
    discount: number | null
  ) {
    if (discount) return (price * quantity * discount) / 100;
    return price * quantity;
  }
  const total = calculateTotal(price, quantity, discount);
  return (
    <li className="cart-list__item cart-item">
      <img
        className="cart-item__img"
        src={thumbnails[0]}
        width={50}
        height={50}
        alt="Shows what sneakers are this cart item"
      />
      <div>
        <h3 className="cart-item__title">{title}</h3>
        <p className="cart-item__paragraph">
          {`${price} x ${quantity} `}
          <span className="cart-item__paragraph_total">{total}</span>
        </p>
      </div>
      <button
        className="cart-item__delete"
        aria-label={`Press to delete ${title} from the cart`}
      >
        <img src="/images/icon-delete.svg" alt="" width={14} height={16} />
      </button>
    </li>
  );
}
