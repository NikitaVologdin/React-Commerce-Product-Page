import { IThumbnailsItemProps } from "../../types/thumbnails";
import Thumbnails from "./Thumbnails";

// function Gallery({ imageIndex, title, id, images, onActiveImageHandler }) {
//   createPortal(
//     <dialog className="gallery">
//       <button>close</button>
//       <div className="gallery__main"></div>
//       <Thumbnails imageIndex={imageIndex} title={title} id={id} images={images} onActiveImageHandler={}/>
//     </dialog>,
//     document.body
//   );
// }

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

  function showGallery() {}

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
