export default function Logo({ logo }: { logo: string }) {
  return (
    <a href="/" aria-label="To home page" className="header__logo">
      <img src={logo} alt="" width={137} height={20} />
    </a>
  );
}
