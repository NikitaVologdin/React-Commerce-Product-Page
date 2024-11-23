import Header from "./sections/Header";
import Logo from "./components/Logo";

function App() {
  const stock: IStockItem[] = [
    { title: "Fall Limited Edition Sneakers", price: 250, discount: 50 },
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
