import { userContext } from "./UserContext";

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = { avatar: "/images/image-avatar.png" };

  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}
