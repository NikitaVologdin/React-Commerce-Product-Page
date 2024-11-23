import { useRef } from "react";
import { galleryContext } from "./galleryContext";
import { IGalleryContextProviderProps } from "../../types/gallery";
import gallery from "../../../.history/src/components/Gallery_20241112130021";

export default function GalleryContextProvider({
  children,
}: IGalleryContextProviderProps) {
  const galleryRef = useRef<HTMLDialogElement>(null);

  return (
    <galleryContext.Provider value={{ galleryRef }}>
      {children}
    </galleryContext.Provider>
  );
}
