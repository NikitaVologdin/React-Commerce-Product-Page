import { useState } from "react";
import { useRef } from "react";
import { galleryContext } from "./galleryContext";
import { IGalleryContextProviderProps } from "../../types/gallery";

export default function GalleryContextProvider({
  children,
}: IGalleryContextProviderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const ref = useRef<HTMLDialogElement>(null);

  function onShowImageInGallery(index: number) {
    if (index) setImageIndex(index);
    ref.current?.showModal();
  }

  return (
    <galleryContext.Provider value={{ ref, onShowImageInGallery, imageIndex }}>
      {children}
    </galleryContext.Provider>
  );
}
