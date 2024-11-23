import { INavProps } from "./nav";

export interface IHamburgerProps extends INavProps {
  setIsMenuOpen: (value: boolean) => void;
}
