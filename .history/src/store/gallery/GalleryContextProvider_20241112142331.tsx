import { useRef } from "react";
import { galleryContext } from "./galleryContext";
import { IGalleryContextProviderProps } from "../../types/gallery";

export default function GalleryContextProvider({
  children,
}: IGalleryContextProviderProps) {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <galleryContext.Provider value={{ ref }}>
      {children}
    </galleryContext.Provider>
  );
}
