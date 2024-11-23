import { type IThumbnailsProps } from "../types/thumbnails";

export default function Thumbnails({ title, images, id }: IThumbnailsProps) {
  return (
    <ul className="stock-item__thumbnails thumbnails">
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
