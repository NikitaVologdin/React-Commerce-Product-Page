import { useRef } from "react";
import { createPortal } from "react-dom";
import Carousel from "./Carousel";

export default function Gallery() {
  const galleryRef = useRef<HTMLDialogElement>(null);
  return createPortal(
    <dialog ref={galleryRef}>
      <Carousel />
    </dialog>,
    document.body
  );
}
