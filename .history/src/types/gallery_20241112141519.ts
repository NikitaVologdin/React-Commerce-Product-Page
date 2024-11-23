import { ReactNode } from "react";

export interface IGalleryContext {
  onShowImageInGallery: (index: number) => void;
}
export interface IGalleryContextProviderProps {
  children: ReactNode;
}
