export interface IStockItem {
  title: string;
  description: string;
  img: string[];
  price: number;
  discount: number | null;
  id: string;
  thumbnails: string[];
}
