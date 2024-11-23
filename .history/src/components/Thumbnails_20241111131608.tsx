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
  const [thumbnails, setThumbnails] = useState(images);

  //   function setDefaultThumbnails(thumbnails: string[], imageIndex: number) {
  //     const result = [...thumbnails];
  //     result.splice(imageIndex, 1);
  //     return result;
  //   }

  useEffect(() => {
    function getPrevImageIndex(imageIndex: number) {
      if (imageIndex === 0) return images.length - 1;
      return imageIndex - 1;
    }
    const prevImageIndex = getPrevImageIndex(imageIndex);
    updateThumbnails(prevImageIndex, imageIndex, images);
    console.log(thumbnails);
  }, [imageIndex, images]);

  function updateThumbnails(
    prevImageIndex: number,
    imageIndex: number,
    images: string[]
  ) {
    const result = [...images];
    result.push(images[prevImageIndex]);
    result.splice(0, 1);
    result.splice(imageIndex, 1);
    return setThumbnails(result);
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
