"use client";
import { useState, useContext, useEffect } from "react";
import { type IHeaderProps } from "../types/header";
import CartIcon from "../components/cart/CartIcon";
import Hamburger from "../components/Hamburger";
import Nav from "../components/Nav";
import { cartContext } from "../store/CartContext";
import Cart from "../components/cart/Cart";
import Avatar from "../components/Avatar";
import { userContext } from "../store/UserContext";

export default function Header({ children }: IHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCTX = useContext(cartContext);
  const userCTX = useContext(userContext);

  useEffect(() => {
    if (isCartOpen) setIsMenuOpen(false);
  }, [isCartOpen]);

  return (
    <header className="app__header header">
      <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {children}
      <Nav isMenuOpen={isMenuOpen} />
      <CartIcon
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        amount={cartCTX.getItemsAmount()}
      />
      <Cart
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        items={cartCTX.items}
      />
      <Avatar user={userCTX} />
    </header>
  );
}
