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
  return (
    <div className="stock-item__carousel carousel">
      <div></div>
      <div className="carousel__main">
        <div></div>
        <img width={375} height={300} src="" alt="" />
        <div></div>
      </div>
      <div></div>
    </div>
  );
}
