export interface IStockItem {
  manufacturer: string;
  title: string;
  description: string;
  img: string[];
  price: number;
  discount: number | null;
  id: string;
  thumbnails: string[];
}

export interface IStockItemProps {
  stockItem: IStockItem;
}
