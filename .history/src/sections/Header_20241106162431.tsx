function Logo() {
  return <h1 className="header__title">sneakers</h1>;
}

export default function Header() {
  return (
    <header className="app__header header">
      <Logo />
    </header>
  );
}
