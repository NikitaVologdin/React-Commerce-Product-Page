// import { useState, useEffect } from "react";

export default function Thumbnails({
  title,
  images,
  id,
}: {
  imageIndex: number;
  title: string;
  images: string[];
  id: string;
}) {
  //   function setDefaultThumbnails(thumbnails: string[], imageIndex: number) {
  //     const result = [...thumbnails];
  //     result.splice(imageIndex, 1);
  //     return result;
  //   }

  return (
    <ul className="carousel__thumbnails thumbnails">
      {images.map((src, index) => {
        console.log(src);
        return (
          <li className="thumbnails__item" key={id + index}>
            <img src={src} alt={`Shows ${title}`} />
          </li>
        );
      })}
    </ul>
  );
}
