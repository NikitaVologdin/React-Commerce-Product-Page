import Header from "./sections/Header";
import Logo from "./components/Logo";

interface IStockItem {
  title: string;
  price: number;
  discount: number | null;
}

function App() {
  const stock: IStockItem[] = [
    { title: "Fall Limited Edition Sneakers", price: 125, discount: 50 },
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
