import { ReactNode } from "react";

export interface IGalleryContext {
  onShowImageInGallery: () => void;
}
export interface IGalleryContextProviderProps {
  children: ReactNode;
}
