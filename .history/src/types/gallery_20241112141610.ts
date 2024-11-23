import { ReactNode } from "react";
import { IStockItem } from "./stock";

export interface IGalleryContext {
  onShowImageInGallery: (index: number) => void;
}
export interface IGalleryContextProviderProps {
  children: ReactNode;
}
export interface IGalleryProps {
  item: IStockItem;
}
