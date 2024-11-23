import Header from "./sections/Header";
import Logo from "./components/Logo";
import { type IStockItem } from "./types/stock";
import StockItem from "./components/StockItem";
import UserContextProvider from "./store/user/UserContextProvider";
import GalleryContextProvider from "./store/gallery/GalleryContextProvider";

function App() {
  const stock: IStockItem[] = [
    {
      manufacturer: "Sneaker Company",
      title: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      price: 125,
      discount: 50,
      id: "aa001",
      img: [
        "/images/image-product-1.webp",
        "/images/image-product-2.webp",
        "/images/image-product-3.webp",
        "/images/image-product-4.webp",
      ],
      thumbnails: [
        "images/image-product-1-thumbnail.webp",
        "images/image-product-2-thumbnail.webp",
        "images/image-product-3-thumbnail.webp",
        "images/image-product-4-thumbnail.webp",
      ],
    },
  ];

  return (
    <UserContextProvider>
      <Header>
        <Logo logo={"/images/logo.svg"} />
      </Header>
      <div className="app__hr"></div>
      <main className="app__main" id="main">
        <section className="main__stock stock">
          <GalleryContextProvider>
            <StockItem stockItem={stock[0]} />
          </GalleryContextProvider>
        </section>
      </main>
    </UserContextProvider>
  );
}

export default App;
