import Header from "./sections/Header";
import Logo from "./components/Logo";
import { IStockItem } from "./types/stock";

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
