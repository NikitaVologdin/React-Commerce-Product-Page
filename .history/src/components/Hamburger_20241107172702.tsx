import { type IHamburgerProps } from "../types/hamburger";

export default function Hamburger({
  isMenuOpen,
  setIsMenuOpen,
}: IHamburgerProps) {
  function clickHandler() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <button
      className={`header__hamburger hamburger ${
        isMenuOpen ? "hamburger_close" : ""
      }`}
      onClick={clickHandler}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    >
      <span className="hamburger__line"></span>
      <span className="hamburger__line"></span>
      <span className="hamburger__line"></span>
    </button>
  );
}
