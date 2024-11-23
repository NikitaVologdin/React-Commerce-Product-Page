import Header from "./sections/Header";
import Logo from "./components/Logo";
import { IStockItem } from "./types/stock";
import { useContext } from "react";
import { cartContext } from "./store/CartContext";

function Carousel() {
  return <div></div>;
}

interface IStockItemProps {
  stockItem: IStockItem;
}

function StockItem({ stockItem }: IStockItemProps) {
  const { id, price, discount, manufacturer, title, description } = stockItem;
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
      <div className="stock-item__body">
        <b className="stock-item__manufacturer">{manufacturer}</b>
        <h1 className="stock-item__title">{title}</h1>
        <p className="stock-item__paragraph">{description}</p>
        <div className="stock-item__info">
          <span className="stock-item__price">{price.toFixed(2)}</span>
          {discount ? (
            <span className="stock-item__discount">{discount}%</span>
          ) : (
            ""
          )}
          {discount ? (
            <span className="stock-item__previousPrice">
              ${previousPrice?.toFixed(2)}
            </span>
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
        <button className="stock-item__add" aria-label="Add item to the cart">
          <div className="stock-item__cart-icon">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill=""
                fillRule="nonzero"
              />
            </svg>
          </div>
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
      <main className="app__main">
        <section className="main__stock stock">
          <StockItem stockItem={stock[0]} />
        </section>
      </main>
    </>
  );
}

export default App;
