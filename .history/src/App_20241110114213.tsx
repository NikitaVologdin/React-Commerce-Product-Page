import Header from "./sections/Header";
import Logo from "./components/Logo";
import { type IStockItem } from "./types/stock";
import StockItem from "./components/StockItem";

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
        "/images/image-product-1.jpg",
        "/images/image-product-2.jpg",
        "/images/image-product-3.jpg",
        "/images/image-product-4.jpg",
      ],
      thumbnails: [
        "/images/image-product-1-thumbnail.jpg",
        "/images/image-product-2-thumbnail.jpg",
        "/images/image-product-3-thumbnail.jpg",
        "/images/image-product-4-thumbnail.jpg",
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
