import { ReactNode } from "react";
import { IStockItem } from "./stock";

export interface IGalleryContext {
  onShowImageInGallery: (index: number) => void;
  ref: {};
}
export interface IGalleryContextProviderProps {
  children: ReactNode;
}
export interface IGalleryProps {
  item: IStockItem;
}
