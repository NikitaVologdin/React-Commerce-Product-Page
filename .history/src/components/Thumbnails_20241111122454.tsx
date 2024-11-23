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
