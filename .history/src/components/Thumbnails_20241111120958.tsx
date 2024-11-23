import { useState, useEffect } from "react";

export default function Thumbnails({
  imageIndex,
  title,
  images,
}: {
  imageIndex: number;
  title: string;
  images: string[];
}) {
  const [thumbnails, setThumbnails] = useState<string[]>(images);

  function updateThumbnails() {
    const t = [...thumbnails];
    console.log(t);
    t.splice(imageIndex, 1);
    setThumbnails(t);
  }
  return (
    <ul className="carousel__thumbnails thumbnails">
      {thumbnails.map((src, index) => {
        return (
          <li className="thumbnails__item" key={item.id + index}>
            <img src={src} alt={`Shows ${item.title}`} />
          </li>
        );
      })}
    </ul>
  );
}
