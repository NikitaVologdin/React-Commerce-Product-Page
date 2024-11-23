import { useRef } from "react";
import { createPortal } from "react-dom";
import Carousel from "./Carousel";
import { IGalleryProps } from "../types/gallery";

export default function Gallery({ item }: IGalleryProps) {
  const galleryRef = useRef<HTMLDialogElement>(null);

  return createPortal(
    <dialog ref={galleryRef}>
      <Carousel item={item} />
    </dialog>,
    document.body
  );
}
