import { useState, useEffect } from "react";
import { IStockItem } from "../types/stock";

interface ICarouselProps {
  item: IStockItem;
}

export default function Carousel({ item }: ICarouselProps) {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(item.img[0]);
  }, [item.img]);

  function previousImageHandler() {}
  return (
    <div className="stock-item__carousel carousel">
      <div></div>
      <div className="carousel__main carousel-main">
        <button
          className="carousel-main__control"
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
        <button className="carousel-main__control">
          <img
            src="/public/images/icon-next.svg"
            alt=""
            aria-label="Next image"
          />
        </button>
      </div>
      <div></div>
    </div>
  );
}
