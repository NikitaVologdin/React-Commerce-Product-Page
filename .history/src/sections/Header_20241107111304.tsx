"use client";
import { useState } from "react";
import { type IHeaderProps } from "../types/header";
import CartIcon from "../components/CartIcon";
import Hamburger from "../components/Hamburger";
import Nav from "../components/Nav";

function Cart({ isCartOpen }: ICartProps) {
  return (
    <dialog className="header__cart cart">
      <h2 className="cart__title">Cart</h2>
      <div className="cart__hr"></div>
      <ul className="cart__list cart-list">
        <li className="cart-list__item"></li>
      </ul>
    </dialog>
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
      <CartIcon isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </header>
  );
}
