import Header from "./sections/Header";
import Logo from "./components/Logo";
import { IStockItem } from "./types/stock";

function App() {
  const stock: IStockItem[] = [
    {
      title: "Fall Limited Edition Sneakers",
      price: 250,
      discount: 50,
      id: "1a00000",
    },
  ];
  return (
    <>
      <Header>
        <Logo />
      </Header>
    </>
  );
}

export default App;
