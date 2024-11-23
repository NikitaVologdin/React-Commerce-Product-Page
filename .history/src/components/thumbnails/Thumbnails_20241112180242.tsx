import { type IThumbnailsProps } from "../../types/thumbnails";
import ThumbnailsItem from "./ThumbnailsItem";

export default function Thumbnails({
  title,
  images,
  id,
  imageIndex,
  onActiveImageHandler,
}: IThumbnailsProps) {
  return (
    <ul className="stock-item__thumbnails gallery__thumbnails thumbnails">
      {images.map((src, index) => {
        const isSelected = imageIndex === index;
        return (
          <ThumbnailsItem
            title={title}
            src={src}
            key={id + index}
            isSelected={isSelected}
            index={index}
            onActiveImageHandler={onActiveImageHandler}
          />
        );
      })}
    </ul>
  );
}
