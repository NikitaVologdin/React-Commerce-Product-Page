import { INavProps } from "../types/nav";

export default function Nav({ isMenuOpen }: INavProps) {
  return (
    <nav className={`header__nav nav ${isMenuOpen ? "nav_open" : ""}`}>
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
