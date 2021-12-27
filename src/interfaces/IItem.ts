import { PaymentMode } from "../enums/PaymentMode";

export interface IItem {
  title: string;
  paymentMode?: PaymentMode;
  sumToPay?: number;
}
