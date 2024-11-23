import { useState, useContext, useEffect } from "react";
import { IStockItem } from "../types/stock";
import Thumbnails from "./thumbnails/Thumbnails";
import { galleryContext } from "../store/gallery/galleryContext";
import useScreenSize from "../hooks/useScreenSize";

interface ICarouselProps {
  item: IStockItem;
  defaultIndex?: number;
}

export default function Carousel({ item }: ICarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [canClick, setCanClick] = useState(false);
  const screenSize = useScreenSize();
  const images = item.img;
  const image = images[imageIndex];
  const galleryCTX = useContext(galleryContext);

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
  function openGalleryHandler() {
    galleryCTX.onShowImageInGallery(imageIndex);
  }
  function setActiveImageHandler(index: number) {
    setImageIndex(index);
  }

  useEffect(() => {
    if (screenSize.width >= 1100) return setCanClick(true);
    setCanClick(false);
  }, [screenSize]);

  useEffect(() => {
    setPosition(imageIndex * 445);
  }, [imageIndex]);
  console.log(position);

  return (
    <>
      <div className="stock-item__carousel carousel">
        <div className="carousel__main carousel-main">
          <button
            className="carousel-main__control carousel-main__control_left"
            onClick={previousImageHandler}
            aria-label="Show previous image"
          >
            <img
              src="/images/icon-previous.svg"
              alt=""
              aria-label="Previous image"
            />
          </button>

          <button
            className="carousel-main__img"
            aria-label="Open in gallery"
            onClick={
              canClick
                ? openGalleryHandler
                : () => {
                    return null;
                  }
            }
          >
            <div className="carousel-main__display">
              <div
                className="carousel-main__slides"
                style={{ left: `-${position}px` }}
              >
                {item.img.map((src, index) => {
                  return (
                    <img
                      width={375}
                      height={300}
                      src={src}
                      alt=""
                      key={Math.random() + index}
                    />
                  );
                })}
              </div>
            </div>
            {/* <img width={375} height={300} src={image} alt="" /> */}
          </button>

          <button
            className="carousel-main__control carousel-main__control_right"
            onClick={nextImageHandler}
            aria-label="Show next image"
          >
            <img src="/images/icon-next.svg" alt="" />
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
    </>
  );
}
