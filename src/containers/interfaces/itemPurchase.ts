import { IPrice } from "../../components/Price/interfaces";

export interface IItemPurchase {
  condition: string;
  sold_quantity: string;
  title: string;
  price: IPrice;
}