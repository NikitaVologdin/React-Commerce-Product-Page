import { galleryContext } from "../../store/gallery/galleryContext";
import { IThumbnailsItemProps } from "../../types/thumbnails";
import { useContext } from "react";
import useSingleAndDoubleClick from "../../hooks/useSingleAndDoubleClick";

export default function ThumbnailsItem({
  isSelected,
  src,
  title,
  index,
  onActiveImageHandler,
}: IThumbnailsItemProps) {
  // const galleryCTX = useContext(galleryContext);

  // function makeImageSelectedHandler() {
  //   ;
  // }
  // function openGalleryHandler() {
  //   galleryCTX.onShowImageInGallery(index);
  // }

  return (
    <li>
      <button
        className={`thumbnails__item ${
          isSelected ? "thumbnails__item_selected" : ""
        }`}
        // onClick={makeImageSelectedHandler}
        onClick={clickHandler}
        // onClick={openGalleryHandler}
      >
        <img src={src} alt={`Shows ${title}`} />
      </button>
    </li>
  );
}
