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
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
      <div className="hamburger__line"></div>
    </button>
  );
}
