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

export default function Header() {
  return (
    <header className="app__header header">
      <Hamburger />
      <Logo />
    </header>
  );
}
