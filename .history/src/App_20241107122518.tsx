import Header from "./sections/Header";
import Logo from "./components/Logo";

interface IStockItem {
  title: string;
  price: number;
  discount: number | null;
}

function App() {
  const stock: IStockItem[] = [{ title: "", price: 0, discount: null }];
  return (
    <>
      <Header>
        <Logo />
      </Header>
    </>
  );
}

export default App;
