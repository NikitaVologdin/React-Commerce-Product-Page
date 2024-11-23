import { useState, useContext } from "react";
import { IStockItem } from "../types/stock";
import Thumbnails from "./thumbnails/Thumbnails";
import { galleryContext } from "../store/gallery/galleryContext";

interface ICarouselProps {
  item: IStockItem;
  defaultIndex?: number;
}

export default function Carousel({ item }: ICarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = item.img;
  const image = images[imageIndex];
  const galleryCTX = useContext(galleryContext);

  function previousImageHandler() {
    // function updateThumbnails(imageIndex: number, images: string[]) {
    //   function getPrevImageIndex(imageIndex: number) {
    //     if (imageIndex === item.thumbnails.length - 1) return 0;
    //     return imageIndex + 1;
    //   }
    //   const prevImageIndex = getPrevImageIndex(imageIndex);
    //   const result = [...images];
    //   result.splice(thumbnails.length - 1, 1);
    //   result.unshift(item.thumbnails[prevImageIndex]);
    //   return setThumbnails(result);
    // }

    // function getImageIndexState() {
    //   if (imageIndex === 0) return images.length - 1;
    //   return imageIndex - 1;
    // }

    setImageIndex((prev) => {
      if (prev === 0) return images.length - 1;
      return prev - 1;
    });

    // const imageStateIndex = getImageIndexState();
    // updateThumbnails(imageStateIndex, thumbnails);
  }
  function nextImageHandler() {
    // function updateThumbnails(imageIndex: number, images: string[]) {
    //   function getPrevImageIndex(imageIndex: number) {
    //     if (imageIndex === 0) return item.thumbnails.length;
    //     return imageIndex - 1;
    //   }
    //   const prevImageIndex = getPrevImageIndex(imageIndex);
    //   const result = [...images];
    //   result.splice(0, 1);
    //   result.push(item.thumbnails[prevImageIndex]);
    //   return setThumbnails(result);
    // }

    setImageIndex((prev) => {
      if (prev === images.length - 1) return 0;
      return prev + 1;
    });

    // updateThumbnails(imageIndex + 1, thumbnails);
  }
  function openGalleryHandler() {
    galleryCTX.onShowImageInGallery(imageIndex);
  }
  function setActiveImageHandler(index: number) {
    setImageIndex(index);
  }
  function getIsSmallDevice() {
    const main = document.getElementById("main") as HTMLElement;
    if (main) {
      return main.offsetWidth < 1100 ? true : false;
    }
    return false;
  }
  const isSmallDevice = getIsSmallDevice();
  console.log(isSmallDevice);
  return (
    <>
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

          <button
            className="carousel-main__img"
            onClick={isSmallDevice ? () => {} : openGalleryHandler}
          >
            <img width={375} height={300} src={image} alt="" />
          </button>

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
    </>
  );
}
