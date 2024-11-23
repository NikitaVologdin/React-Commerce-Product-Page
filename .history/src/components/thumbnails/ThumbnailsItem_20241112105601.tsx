import { IThumbnailsItemProps } from "../../types/thumbnails";

export default function ThumbnailsItem({
  isSelected,
  src,
  title,
  index,
  onActiveImageHandler,
}: IThumbnailsItemProps) {
  function makeImageSelectedHandler() {
    onActiveImageHandler(index);
  }
  return (
    <li>
      <button
        className={`thumbnails__item ${
          isSelected ? "thumbnails__item_selected" : ""
        }`}
        onClick={makeImageSelectedHandler}
      >
        <img src={src} alt={`Shows ${title}`} />
      </button>
    </li>
  );
}
