import { useState } from "react";

interface INavProps {
  isMenuOpen: boolean;
}

interface IHamburgerProps extends INavProps {
  setIsMenuOpen: (value: boolean) => void;
}

function Logo() {
  return <h1 className="header__title">sneakers</h1>;
}

function Hamburger({ isMenuOpen, setIsMenuOpen }: IHamburgerProps) {
  function clickHandler() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <button
      className={`header__hamburger hamburger ${
        isMenuOpen ? "hamburger_close" : ""
      }`}
    >
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
    </button>
  );
}

function Nav({ isMenuOpen }: INavProps) {
  return (
    <nav className={`header__nav nav ${isMenuOpen ? "nav_open" : ""}`}>
      <ul className="nav__list nav-list">
        <li className="nav-list__item">Collections</li>
        <li className="nav-list__item">Men</li>
        <li className="nav-list__item">Women</li>
        <li className="nav-list__item">About</li>
        <li className="nav-list__item">Contact</li>
      </ul>
    </nav>
  );
}

export default function Header() {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  return (
    <header className="app__header header">
      <Hamburger isMenuOpen={isMenuOpen} setMenuIsOpen={setMenuIsOpen} />
      <Logo />
      <Nav isMenuOpen={isMenuOpen} />
    </header>
  );
}
