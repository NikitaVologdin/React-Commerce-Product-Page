import { userContext } from "./UserContext";

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <userContext.Provider value={{ avatar: "" }}>
      {children}
    </userContext.Provider>
  );
}
