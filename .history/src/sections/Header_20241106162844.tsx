import { useState } from "react";

function Logo() {
  return <h1 className="header__title">sneakers</h1>;
}

function Hamburger() {
  return (
    <button className="header__hamburger hamburger">
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
    </button>
  );
}

function Nav() {
  return (
    <nav className="header__nav nav">
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

export default function Header() {
  return (
    <header className="app__header header">
      <Hamburger />
      <Logo />
      <Nav />
    </header>
  );
}
