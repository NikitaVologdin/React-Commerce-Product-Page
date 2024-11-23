import Header from "./sections/Header";
import Logo from "./components/Logo";

interface IStockItem {
  title: string;
  price: string;
  discount: number;
}

function App() {
  const stock: IStockItem[] = [];
  return (
    <>
      <Header>
        <Logo />
      </Header>
    </>
  );
}

export default App;
