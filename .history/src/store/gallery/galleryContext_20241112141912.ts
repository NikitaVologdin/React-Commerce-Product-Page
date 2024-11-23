import { createContext } from "react";
import { type IGalleryContext } from "../../types/gallery";

export const galleryContext = createContext<IGalleryContext>({
  onShowImageInGallery: () => {},
  galleryRef: {},
});
