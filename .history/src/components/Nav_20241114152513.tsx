import { type INavProps } from "../types/nav";
import { Link } from "react-router-dom";

export default function Nav({ isMenuOpen }: INavProps) {
  return (
    <nav className={`header__nav nav ${isMenuOpen ? "nav_open" : ""}`}>
      <ul className="nav__list nav-list">
        <li className="nav-list__item">
          <Link to="/collections">Collections</Link>
        </li>
        <li className="nav-list__item">
          <Link to="/men">Men</Link>
        </li>
        <li className="nav-list__item">
          <Link to="/women">Women</Link>
        </li>
        <li className="nav-list__item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-list__item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
