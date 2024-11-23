import { type IThumbnailsProps } from "../../types/thumbnails";
import ThumbnailsItem from "./ThumbnailsItem";

export default function Thumbnails({ title, images, id }: IThumbnailsProps) {
  return (
    <ul className="stock-item__thumbnails thumbnails">
      {images.map((src, index) => {
        return <ThumbnailsItem id={id} title={title} src={src} index={index} />;
      })}
    </ul>
  );
}
