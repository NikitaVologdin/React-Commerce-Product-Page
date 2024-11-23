"use client";
import { useState } from "react";

interface IHeaderProps {
  children: React.ReactNode[] | React.ReactNode;
}

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
      onClick={clickHandler}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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

function Cart({ isCartOpen, setIsCartOpen, children }: ICartProps) {
  function toggleCartHandler() {
    setIsCartOpen(true);
  }
  return (
    <button
      aria-label={isCartOpen ? "Close cart" : "Open cart"}
      onClick={toggleCartHandler}
    >
      <img src="/images/icon-cart.svg" alt="Cart icon" />
    </button>
  );
}

export default function Header({ children }: IHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  //   console.log(children);
  return (
    <header className="app__header header">
      {children}
      <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Logo />
      <Nav isMenuOpen={isMenuOpen} />
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </header>
  );
}
