import { createPortal } from "react-dom";
import Carousel from "./Carousel";

export default function gallery() {
  return createPortal(
    <dialog>
      <Carousel />
    </dialog>,
    document.body
  );
}
