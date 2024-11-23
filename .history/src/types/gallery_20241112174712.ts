import { ReactNode, RefObject } from "react";
import { IStockItem } from "./stock";

export interface IGalleryContext {
  onShowImageInGallery: (index: number) => void;
  onCloseImageGallery: () => void;
  ref: RefObject<HTMLDialogElement>;
  imageIndex: number;
}
export interface IGalleryContextProviderProps {
  children: ReactNode;
}
export interface IGalleryProps {
  item: IStockItem;
}
