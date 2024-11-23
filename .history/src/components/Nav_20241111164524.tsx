import { type INavProps } from "../types/nav";

export default function Nav({ isMenuOpen }: INavProps) {
  return (
    <nav className={`header__nav nav ${isMenuOpen ? "nav_open" : ""}`}>
      <ul className="nav__list nav-list">
        <li className="nav-list__item">
          <a href="">Collections</a>
        </li>
        <li className="nav-list__item">
          <a href="">Men</a>
        </li>
        <li className="nav-list__item">
          <a href="">Women</a>
        </li>
        <li className="nav-list__item">
          <a href="">About</a>
        </li>
        <li className="nav-list__item">
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
