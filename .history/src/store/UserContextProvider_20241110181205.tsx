import { userContext } from "./UserContext";

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <userContext.Provider>{children}</userContext.Provider>;
}
