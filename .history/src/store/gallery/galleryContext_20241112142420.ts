import { createContext, createRef } from "react";
import { type IGalleryContext } from "../../types/gallery";

export const galleryContext = createContext<IGalleryContext>({
  onShowImageInGallery: () => {},
  ref: createRef(),
});
