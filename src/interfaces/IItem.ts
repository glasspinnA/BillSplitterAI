import { PaymentMode } from "../enums/PaymentMode";

export interface IItem {
  id: string;
  title: string;
  paymentMode?: PaymentMode;
  sumToPay?: number;
}
