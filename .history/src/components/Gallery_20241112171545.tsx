import { createPortal } from "react-dom";
import { IGalleryProps } from "../types/gallery";
import { useContext } from "react";
import { galleryContext } from "../store/gallery/galleryContext";
import Carousel from "./Carousel";

export default function Gallery({ item }: IGalleryProps) {
  const galleryCTX = useContext(galleryContext);
  return createPortal(
    <dialog ref={galleryCTX.ref} className="stock-item__gallery gallery">
      {/* <div className="stock-item__carousel carousel">
        <div></div>
        <div className="carousel__main carousel-main">
          <button
            className="carousel-main__control carousel-main__control_left"
            onClick={previousImageHandler}
          >
            <img
              src="/public/images/icon-previous.svg"
              alt=""
              aria-label="Previous image"
            />
          </button>
          <img
            className="carousel-main__img"
            width={375}
            height={300}
            src={image}
            alt=""
          />
          <button
            className="carousel-main__control carousel-main__control_right"
            onClick={nextImageHandler}
          >
            <img
              src="/public/images/icon-next.svg"
              alt=""
              aria-label="Next image"
            />
          </button>
        </div>
      </div>
      <Thumbnails
        images={item.thumbnails}
        title={item.title}
        imageIndex={imageIndex}
        id={item.id}
        onActiveImageHandler={setActiveImageHandler}
      /> */}
    </dialog>,
    document.body
  );
}
