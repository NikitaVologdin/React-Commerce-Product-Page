import { IThumbnailsItemProps } from "../../types/thumbnails";
import { createPortal } from "react-dom";

function Gallery() {
  createPortal(
    <dialog className="gallery">
      <button>close</button>
      <div className="gallery__main"></div>
      <div>Thumbnails</div>
    </dialog>,
    document.body
  );
}

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
