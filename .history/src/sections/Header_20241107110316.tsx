"use client";
import { useState } from "react";
import { type IHeaderProps } from "../types/header";
import Cart from "../components/Cart";
import Hamburger from "../components/Hamburger";

interface INavProps {
  isMenuOpen: boolean;
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

export default function Header({ children }: IHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  //   console.log(children);
  return (
    <header className="app__header header">
      {children}
      <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Nav isMenuOpen={isMenuOpen} />
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </header>
  );
}
