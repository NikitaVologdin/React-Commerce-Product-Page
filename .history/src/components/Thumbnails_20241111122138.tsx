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
  const [thumbnails, setThumbnails] = useState<string[]>(images);

  useEffect(() => {
    const t = [...thumbnails];
    t.splice(imageIndex, 1);
    setThumbnails(t);
  }, []);

  useEffect(() => {
    const t = [...images];
    const removedEl = t.splice(imageIndex, 1);
    t.push(removedEl);
  }, [imageIndex]);
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
