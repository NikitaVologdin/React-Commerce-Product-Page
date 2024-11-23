import Header from "./sections/Header";
import Logo from "./components/Logo";
import { IStockItem } from "./types/stock";
import { useContext } from "react";
import { cartContext } from "./store/CartContext";

function Carousel() {
  return <div></div>;
}

function Item({ manufacturer, title, description, price, discount, id }) {
  const previousPrice = (price * 100) / discount;
  const ctx = useContext(cartContext);
  function decreaseHandler() {
    ctx.decreaseQuantity(id);
  }
  function increaseHandler() {
    ctx.increaseQuantity(id);
  }
  return (
    <section className="main__stock stock">
      <Carousel />
      <article className="stock-item">
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
          >
            <img
              src="/public/images/icon-minus.svg"
              width={12}
              height={3}
              alt=""
            />
          </button>
          <span>{ctx.getQuantity(id)}</span>
          <button
            className="amount-controller__button"
            onClick={increaseHandler}
          >
            <img
              src="/public/images/icon-plus.svg"
              width={12}
              height={12}
              alt=""
            />
          </button>
        </div>
        <button className="">
          <img
            src="/public/images/icon-cart.svg"
            width={17}
            height={16}
            alt=""
          />
          <span>Add to cart</span>
        </button>
      </article>
    </section>
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
      <main></main>
    </>
  );
}

export default App;
