"use client";
import { useState, useContext } from "react";
import { type IHeaderProps } from "../types/header";
import CartIcon from "../components/CartIcon";
import Hamburger from "../components/Hamburger";
import Nav from "../components/Nav";
import { cartContext } from "../store/CartContext";

function Cart({ isCartOpen, items }: ICartProps) {
  return (
    <dialog className="header__cart cart">
      <h2 className="cart__title">Cart</h2>
      <div className="cart__hr"></div>
      <ul className="cart__list cart-list">
        <li className="cart-list__item cart-item">
          <img className="cart-item__img" src={item.img} alt="" />
          <h3 className="cart-item__title">{item.title}</h3>
          <p className="cart-item__paragraph">
            {`${item.price} x ${item.quantity} `}
            <span className="cart-item__paragraph_total">{total}</span>
          </p>
          <button
            className="cart-item__delete"
            aria-label={`Press to delete ${item.title} from the cart`}
          >
            <img src="/images/icon-delete.svg" alt="" />
          </button>
        </li>
      </ul>
      <button className="cart__checkout">checkout</button>
    </dialog>
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
