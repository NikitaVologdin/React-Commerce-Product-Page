import { INavProps } from "./nav";

export interface IHamburgerProps extends INavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}
