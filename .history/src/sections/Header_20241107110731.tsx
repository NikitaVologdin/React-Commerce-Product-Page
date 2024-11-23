"use client";
import { useState } from "react";
import { type IHeaderProps } from "../types/header";
import CartIcon from "../components/CartIcon";
import Hamburger from "../components/Hamburger";
import Nav from "../components/Nav";

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
