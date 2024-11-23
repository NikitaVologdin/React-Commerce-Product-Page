import { createPortal } from "react-dom";
import { IGalleryProps } from "../types/gallery";
import { useContext } from "react";
import { galleryContext } from "../store/gallery/galleryContext";

export default function Gallery({ item }: IGalleryProps) {
  const galleryCTX = useContext(galleryContext);

  return createPortal(
    <dialog ref={galleryCTX.ref} className="stock-item__gallery">
      <div></div>
    </dialog>,
    document.body
  );
}
