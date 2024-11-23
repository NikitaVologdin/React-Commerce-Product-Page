import { useState, useEffect } from "react";

export default function Thumbnails({
  imageIndex,
  title,
  images,
  id,
}: {
  imageIndex: number;
  title: string;
  images: string[];
  id: string;
}) {
  const [thumbnails, setThumbnails] = useState([]);

  function setDefaultThumbnails(thumbnails: string[], imageIndex: number) {
    const result = [...thumbnails];
    result.splice(imageIndex, 1);
    return result;
  }

  useEffect(() => {
    const prevImageIndex = getPrevImageIndex(imageIndex);
    updateThumbnails(prevImageIndex, imageIndex, images);
  }, [imageIndex, images]);

  function getPrevImageIndex(imageIndex: number) {
    return imageIndex + 1;
  }

  function updateThumbnails(
    prevImageIndex: number,
    imageIndex: number,
    images: string[]
  ) {
    const result = [...images];
    result.splice(imageIndex, 1);
    result.push(images[prevImageIndex]);
    setThumbnails(result);
  }

  return (
    <ul className="carousel__thumbnails thumbnails">
      {thumbnails.map((src, index) => {
        return (
          <li className="thumbnails__item" key={id + index}>
            <img src={src} alt={`Shows ${title}`} />
          </li>
        );
      })}
    </ul>
  );
}
