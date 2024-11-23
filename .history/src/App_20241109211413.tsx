import Header from "./sections/Header";
import Logo from "./components/Logo";
import { IStockItem } from "./types/stock";

function Carousel() {
  return <div></div>;
}

function Item({ manufacturer, title, description, price, discount }) {
  const previousPrice = (price * 100) / discount;
  return (
    <section className="main__stock-item stock-item">
      <Carousel />
      <article>
        <b className="">{manufacturer}</b>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <span>{price}</span>
          <span>{discount}</span>
          <span>{previousPrice}</span>
        </div>
        <div></div>
        <button className=""></button>
      </article>
    </section>
  );
}

function App() {
  const stock: IStockItem[] = [
    {
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
