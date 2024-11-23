import { createPortal } from "react-dom";
import { IGalleryProps } from "../types/gallery";
import { useContext, useState, useEffect } from "react";
import { galleryContext } from "../store/gallery/galleryContext";
import Thumbnails from "./thumbnails/Thumbnails";

export default function Gallery({ item }: IGalleryProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const galleryCTX = useContext(galleryContext);
  const images = item.img;
  const image = images[imageIndex];

  function previousImageHandler() {
    setImageIndex((prev) => {
      if (prev === 0) return images.length - 1;
      return prev - 1;
    });
  }
  function nextImageHandler() {
    setImageIndex((prev) => {
      if (prev === images.length - 1) return 0;
      return prev + 1;
    });
  }
  function setActiveImageHandler(index: number) {
    setImageIndex(index);
  }
  function closeDialogHandler(
    event: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) {
    let isInDialog;
    const rect = galleryCTX.ref.current?.getBoundingClientRect();
    if (rect)
      isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      galleryCTX.onCloseImageGallery();
    }
  }

  const closeIcon = (
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
        fill=""
        fillRule="evenodd"
      />
    </svg>
  );

  useEffect(() => {
    setImageIndex(galleryCTX.imageIndex);
  }, [galleryCTX.imageIndex]);

  return createPortal(
    <dialog
      ref={galleryCTX.ref}
      className="stock-item__gallery gallery"
      onClick={closeDialogHandler}
    >
      <div className="gallery__control">
        <button className="gallery__close">{closeIcon}</button>
      </div>
      <div className="stock-item__carousel carousel">
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
            className="gallery__main-img"
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
      />
    </dialog>,
    document.body
  );
}
