export interface IThumbnailsProps {
  imageIndex: number;
  title: string;
  images: string[];
  id: string;
  onActiveImageHandler: () => void;
}

export interface IThumbnailsItemProps {
  isSelected: boolean;
  src: string;
  title: string;
  index: number;
  onActiveImageHandler: (index: number) => void;
}
