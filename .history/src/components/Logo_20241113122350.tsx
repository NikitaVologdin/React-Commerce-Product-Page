export default function Logo({ logo }: { logo: string }) {
  return (
    <a href="/" aria-label="To home page">
      <img src={logo} alt="" className="header__logo" width={137} height={20} />
    </a>
  );
}
