export default function Logo({ logo }: { logo: string }) {
  // return <h1 >sneakers</h1>;
  return (
    <img src={logo} alt="" className="header__logo" width={137} height={20} />
  );
}
