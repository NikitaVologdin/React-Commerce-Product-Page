import Header from "./sections/Header";
import Logo from "./components/Logo";
import { IStockItem } from "./types/stock";
import { useContext } from "react";
import { cartContext } from "./store/CartContext";

function Carousel() {
  return <div></div>;
}

interface IStockItemProps {
  manufacturer: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  id: string;
}

function StockItem({
  manufacturer,
  title,
  description,
  price,
  discount,
  id,
}: IStockItem) {
  const ctx = useContext(cartContext);
  const quantity = ctx.getQuantity(id);
  let previousPrice;
  if (discount) previousPrice = (price * 100) / discount;
  function decreaseHandler() {
    ctx.decreaseQuantity(id);
  }
  function increaseHandler() {
    ctx.increaseQuantity(id);
  }

  return (
    <article className="stock-item">
      <Carousel />
      <div>
        <b className="stock-item__manufacturer">{manufacturer}</b>
        <h1 className="stock-item__title">{title}</h1>
        <p className="stock-item__paragraph">{description}</p>
        <div className="stock-item__info">
          <span className="stock-item__price">{price}</span>
          {discount ? (
            <span className="stock-item__discount">{discount}</span>
          ) : (
            ""
          )}
          {discount ? (
            <span className="stock-item__previousPrice">{previousPrice}</span>
          ) : (
            ""
          )}
        </div>
        <div className="stock-item__amount amount-controller">
          <button
            className="amount-controller__button"
            onClick={decreaseHandler}
            aria-label="Decrease amount"
          >
            <img
              src="/public/images/icon-minus.svg"
              width={12}
              height={3}
              alt=""
            />
          </button>
          <span aria-label={`Quantity: ${quantity}`} aria-live="polite">
            {quantity}
          </span>
          <button
            className="amount-controller__button"
            onClick={increaseHandler}
            aria-label="Increase amount"
          >
            <img
              src="/public/images/icon-plus.svg"
              width={12}
              height={12}
              alt=""
            />
          </button>
        </div>
        <button className="" aria-label="Add item to the cart">
          <img
            src="/public/images/icon-cart.svg"
            width={17}
            height={16}
            alt=""
          />
          <span>Add to cart</span>
        </button>
      </div>
    </article>
  );
}

function App() {
  const stock: IStockItem[] = [
    {
      manufacturer: "Sneaker Company",
      title: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      price: 250,
      discount: 50,
      id: "aa001",
      img: [
        "image-product-1.jpg",
        "image-product-2.jpg",
        "image-product-3.jpg",
        "image-product-4.jpg",
      ],
      thumbnails: [
        "image-product-1-thumbnail.jpg",
        "image-product-2-thumbnail.jpg",
        "image-product-3-thumbnail.jpg",
        "image-product-4-thumbnail.jpg",
      ],
    },
  ];
  return (
    <>
      <Header>
        <Logo logo={"/images/logo.svg"} />
      </Header>
      <main>
        <section className="main__stock stock"></section>
      </main>
    </>
  );
}

export default App;
