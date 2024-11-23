export default function Logo({ logo }: { logo: string }) {
  return (
    <img src={logo} alt="" className="header__logo" width={137} height={20} />
  );
}
