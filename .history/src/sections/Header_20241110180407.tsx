"use client";
import { useState, useContext } from "react";
import { type IHeaderProps } from "../types/header";
import CartIcon from "../components/cart/CartIcon";
import Hamburger from "../components/Hamburger";
import Nav from "../components/Nav";
import { cartContext } from "../store/CartContext";
import Cart from "../components/cart/Cart";
import Avatar from "../components/Avatar";

export default function Header({ children }: IHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const ctx = useContext(cartContext);

  const user = { avatar: "/images/image-avatar.png" };

  return (
    <header className="app__header header">
      <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {children}
      <Nav isMenuOpen={isMenuOpen} />
      <CartIcon
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        amount={ctx.getItemsAmount()}
      />
      <Cart
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        items={ctx.items}
      />
      <Avatar user={user} />
    </header>
  );
}
