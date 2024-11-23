import { type IThumbnailsProps } from "../../types/thumbnails";
import ThumbnailsItem from "./ThumbnailsItem";

export default function Thumbnails({
  title,
  images,
  id,
  imageIndex,
}: IThumbnailsProps) {
  return (
    <ul className="stock-item__thumbnails thumbnails">
      {images.map((src, index) => {
        const isSelected = imageIndex === index;
        return (
          <ThumbnailsItem
            id={id}
            title={title}
            src={src}
            key={id + index}
            isSelected={isSelected}
          />
        );
      })}
    </ul>
  );
}
