import { a } from "framer-motion/client";

export default function Logo({ logo }: { logo: string }) {
  return (
    <a href="">
      <img src={logo} alt="" className="header__logo" width={137} height={20} />
    </a>
  );
}
