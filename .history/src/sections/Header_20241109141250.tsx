"use client";
import { useState, useContext } from "react";
import { type IHeaderProps } from "../types/header";
import CartIcon from "../components/cart/CartIcon";
import Hamburger from "../components/Hamburger";
import Nav from "../components/Nav";
import { cartContext } from "../store/CartContext";
import Cart from "../components/cart/Cart";
import { type ICartItem } from "../types/cart";

interface IAvatarProps {
  user: {
    avatar: string;
  };
}

function Avatar({ user }: IAvatarProps) {
  return (
    <button aria-label="Open profile" className="header__avatar avatar">
      <img
        src={user.avatar}
        width={24}
        height={24}
        alt=""
        className="avatar__img"
      />
    </button>
  );
}

export default function Header({ children }: IHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const ctx = useContext(cartContext);

  const user = { avatar: "/images/image-avatar.png" };
  const stock: ICartItem[] = [
    {
      title: "Fall Limited Edition Sneakers",
      price: 250,
      discount: 50,
      id: "aa001",
      quantity: 1,
      img: [
        "images/image-product-1.jpg",
        "images/image-product-2.jpg",
        "images/image-product-3.jpg",
        "images/image-product-4.jpg",
      ],
      thumbnails: [
        "images/image-product-1-thumbnail.jpg",
        "images/image-product-2-thumbnail.jpg",
        "images/image-product-3-thumbnail.jpg",
        "images/image-product-4-thumbnail.jpg",
      ],
    },
  ];
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
      <Cart
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        items={stock || ctx.items}
      />
      <Avatar user={user} />
    </header>
  );
}
