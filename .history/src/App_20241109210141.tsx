import Header from "./sections/Header";
import Logo from "./components/Logo";
import { IStockItem } from "./types/stock";

function Carousel() {
  return <div></div>;
}

function Item() {
  return <div></div>;
}

function App() {
  const stock: IStockItem[] = [
    {
      title: "Fall Limited Edition Sneakers",
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