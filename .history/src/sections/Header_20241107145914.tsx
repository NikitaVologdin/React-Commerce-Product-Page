"use client";
import { useState, useContext, useRef, useEffect } from "react";
import { type IHeaderProps } from "../types/header";
import CartIcon from "../components/cart/CartIcon";
import Hamburger from "../components/Hamburger";
import Nav from "../components/Nav";
import { cartContext } from "../store/CartContext";
import { ICartItem } from "../types/cart";

function CartItem({ title, img, price, quantity, discount }: ICartItem) {
  function calculateTotal(
    price: number,
    quantity: number,
    discount: number | null
  ) {
    if (discount) return (price * quantity * discount) / 100;
    return price * quantity;
  }
  const total = calculateTotal(price, quantity, discount);
  return (
    <li className="cart-list__item cart-item">
      <img className="cart-item__img" src={img[0]} alt="" />
      <h3 className="cart-item__title">{title}</h3>
      <p className="cart-item__paragraph">
        {`${price} x ${quantity} `}
        <span className="cart-item__paragraph_total">{total}</span>
      </p>
      <button
        className="cart-item__delete"
        aria-label={`Press to delete ${title} from the cart`}
      >
        <img src="/images/icon-delete.svg" alt="" />
      </button>
    </li>
  );
}

export default function Header({ children }: IHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const ctx = useContext(cartContext);

  return (
    <header className="app__header header">
      {children}
      <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Nav isMenuOpen={isMenuOpen} />
      <CartIcon
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        amount={ctx.items.length}
      />
      <Cart isCartOpen={isCartOpen} items={ctx.items} />
    </header>
  );
}
