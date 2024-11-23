"use client";
import { useState, useContext } from "react";
import { type IHeaderProps } from "../types/header";
import CartIcon from "../components/cart/CartIcon";
import Hamburger from "../components/Hamburger";
import Nav from "../components/Nav";
import { cartContext } from "../store/CartContext";
import Cart from "../components/cart/Cart";

function Avatar({ avatar }: { avatar: "/images/image-avatar.png" }) {
  return (
    <button aria-label="Open profile" className="header__avatar avatar">
      <img src={avatar} width={24} height={24} alt="" className="avatar__img" />
    </button>
  );
}

export default function Header({ children }: IHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const ctx = useContext(cartContext);

  return (
    <header className="app__header header">
      <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {children}
      <Nav isMenuOpen={isMenuOpen} />
      <CartIcon
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        amount={ctx.items.length}
      />
      <Cart isCartOpen={isCartOpen} items={ctx.items} />
      <Avatar avatar={{ avatar: "/images/image-avatar.png" }} />
    </header>
  );
}
