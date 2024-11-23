import { IThumbnailsItemProps } from "../../types/thumbnails";

export default function ThumbnailsItem({
  isSelected,
  src,
  title,
}: IThumbnailsItemProps) {
  return (
    <li
      className={`thumbnails__item ${
        isSelected ? "thumbnails__item_selected" : ""
      }`}
    >
      <img src={src} alt={`Shows ${title}`} />
    </li>
  );
}
