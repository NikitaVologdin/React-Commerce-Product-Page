import { useState } from "react";
import { IStockItem } from "../types/stock";
import Thumbnails from "./Thumbnails";

interface ICarouselProps {
  item: IStockItem;
}

export default function Carousel({ item }: ICarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [thumbnails, setThumbnails] = useState(images);

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

  function getPrevImageIndex(imageIndex: number) {
    if (imageIndex === 0) return images.length - 1;
    return imageIndex - 1;
  }
  updateThumbnails(imageIndex, images);

  function updateThumbnails(imageIndex: number, images: string[]) {
    const prevImageIndex = getPrevImageIndex(imageIndex);
    const result = [...images];

    result.splice(imageIndex, 1);
    result.push(images[prevImageIndex]);
    return setThumbnails(result);
  }

  return (
    <>
      <div className="stock-item__carousel carousel">
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
      />
    </>
  );
}