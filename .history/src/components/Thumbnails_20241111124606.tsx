import { useState } from "react";

export default function Thumbnails({
  //   imageIndex,
  title,
  images,
  id,
}: {
    imageIndex: number;
  title: string;
  images: string[];
  id: string;
}) {
  const [thumbnails, setThumbnails] = useState(
    setDefaultThumbnails(images, imageIndex))

      function setDefaultThumbnails(thumbnails: string[], imageIndex: number) {
    const result = [...thumbnails];
    result.splice(imageIndex, 1);
    return result;
  }

  function updateThumbnails(prevImageIndex, imageIndex, images) {
    const result = [...images];
    result.splice(imageIndex, 1);
    result.push(images[prevImageIndex]);
    return result;
  }
  );
  return (
    <ul className="carousel__thumbnails thumbnails">
      {images.map((src, index) => {
        return (
          <li className="thumbnails__item" key={id + index}>
            <img src={src} alt={`Shows ${title}`} />
          </li>
        );
      })}
    </ul>
  );
}
