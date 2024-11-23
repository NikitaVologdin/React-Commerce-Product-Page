import { useState, useEffect } from "react";
import { IStockItem } from "../types/stock";
import Thumbnails from "./Thumbnails";

interface ICarouselProps {
  item: IStockItem;
}

export default function Carousel({ item }: ICarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [thumbnails, setThumbnails] = useState(
    setDefaultThumbnails(item.thumbnails, imageIndex)
  );
  const images = item.img;
  const image = images[imageIndex];

  function getPrevImageIndex(imageIndex: number) {
    if (imageIndex === 0) return item.thumbnails.length;
    return imageIndex - 1;
  }

  function previousImageHandler() {
    function updateThumbnails(imageIndex: number, images: string[]) {
      const prevImageIndex = getPrevImageIndex(imageIndex);
      console.log(prevImageIndex);
      const result = [...images];
      result.splice(thumbnails.length - 1, 1);
      result.unshift(item.thumbnails[imageIndex]);
      return setThumbnails(result);
    }

    function getImageIndexState() {
      if (imageIndex === 0) return images.length - 1;
      return imageIndex - 1;
    }

    setImageIndex((prev) => {
      if (prev === 0) return images.length - 1;
      return prev - 1;
    });

    const imageStateIndex = getImageIndexState();
    updateThumbnails(imageStateIndex, thumbnails);
  }

  function nextImageHandler() {
    function updateThumbnails(imageIndex: number, images: string[]) {
      const prevImageIndex = getPrevImageIndex(imageIndex);
      const result = [...images];
      result.splice(0, 1);
      result.push(item.thumbnails[prevImageIndex]);
      return setThumbnails(result);
    }

    setImageIndex((prev) => {
      if (prev === images.length - 1) return 0;
      return prev + 1;
    });

    updateThumbnails(imageIndex + 1, thumbnails);
  }

  function setDefaultThumbnails(thumbnails: string[], imageIndex: number) {
    const result = [...thumbnails];
    result.splice(imageIndex, 1);
    return result;
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
        images={thumbnails}
        title={item.title}
        imageIndex={imageIndex}
        id={item.id}
      />
    </>
  );
}
