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
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Combined Shape"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 2.85714L17.1429 0L10 7.14286L2.85714 0L0 2.85714L7.14286 10L0 17.1429L2.85714 20L10 12.8571L17.1429 20L20 17.1429L12.8571 10L20 2.85714Z"
      />
    </svg>
  );

  function closeDialogHandler() {
    galleryCTX.onCloseImageGallery();
  }

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
        <button className="gallery__close" onClick={closeDialogHandler}>
          {closeIcon}
        </button>
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
