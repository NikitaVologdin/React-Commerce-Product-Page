import { type INavProps } from "../types/nav";

export default function Nav({ isMenuOpen }: INavProps) {
  return (
    <nav className={`header__nav nav ${isMenuOpen ? "nav_open" : ""}`}>
      <ul className="nav__list nav-list">
        <li className="nav-list__item">
          <a href="/collections">Collections</a>
        </li>
        <li className="nav-list__item">
          <a href="/men">Men</a>
        </li>
        <li className="nav-list__item">
          <a href="/women">Women</a>
        </li>
        <li className="nav-list__item">
          <a href="/about">About</a>
        </li>
        <li className="nav-list__item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
