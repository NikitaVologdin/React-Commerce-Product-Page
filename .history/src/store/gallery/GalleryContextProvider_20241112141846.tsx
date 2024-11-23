import { useRef } from "react";
import { galleryContext } from "./galleryContext";
import { IGalleryContextProviderProps } from "../../types/gallery";

export default function GalleryContextProvider({
  children,
}: IGalleryContextProviderProps) {
  const galleryRef = useRef<HTMLDialogElement>(null);

  return (
    <galleryContext.Provider value={{}}>{children}</galleryContext.Provider>
  );
}
