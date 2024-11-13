import { type IAvatarProps } from "../types/avatar";

export default function Avatar({ user }: IAvatarProps) {
  return (
    <button aria-label="Open profile" className="header__avatar avatar">
      <img
        src={user.avatar}
        width={24}
        height={24}
        alt=""
        className="avatar__img"
      />
    </button>
  );
}
