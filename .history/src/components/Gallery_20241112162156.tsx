import { createPortal } from "react-dom";
import { IGalleryProps } from "../types/gallery";
import { useContext } from "react";
import { galleryContext } from "../store/gallery/galleryContext";
import Carousel from "./Carousel";

export default function Gallery({ item }: IGalleryProps) {
  const galleryCTX = useContext(galleryContext);

  return createPortal(
    <dialog ref={galleryCTX.ref} className="stock-item__gallery gallery">
      {/* <div>
        <button className="gallery__button" aria-label="Previous image">
          <img src="/public/images/icon-previous.svg" alt="" />
        </button>
        <img src="" alt="" />
        <button className="gallery__button" aria-label="Previous image">
          <img src="/public/images/icon-next.svg" alt="" />
        </button>
      </div> */}
      <Carousel item={item} />
    </dialog>,
    document.body
  );
}
