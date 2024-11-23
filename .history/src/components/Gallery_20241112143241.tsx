import { createPortal } from "react-dom";
import Carousel from "./Carousel";
import { IGalleryProps } from "../types/gallery";
import { useContext } from "react";
import { galleryContext } from "../store/gallery/galleryContext";

export default function Gallery({ item }: IGalleryProps) {
  const galleryCTX = useContext(galleryContext);

  return createPortal(
    <dialog ref={galleryCTX.ref}>
      <Carousel item={item} defaultIndex={galleryCTX.imageIndex} />
    </dialog>,
    document.body
  );
}
