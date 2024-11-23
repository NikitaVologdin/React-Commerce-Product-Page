import { ReactNode, RefObject } from "react";
import { IStockItem } from "./stock";

export interface IGalleryContext {
  onShowImageInGallery: (index: number) => void;
  ref: RefObject<HTMLDialogElement>;
}
export interface IGalleryContextProviderProps {
  children: ReactNode;
}
export interface IGalleryProps {
  item: IStockItem;
}
