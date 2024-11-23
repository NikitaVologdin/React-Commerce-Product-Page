import { useRef } from "react";
import { createPortal } from "react-dom";
import Carousel from "./Carousel";

export default function gallery() {
  const galleryRef = useRef();
  return createPortal(
    <dialog>
      <Carousel />
    </dialog>,
    document.body
  );
}
