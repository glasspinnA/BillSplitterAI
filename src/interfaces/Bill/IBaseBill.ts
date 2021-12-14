import { PaymentMode } from "../../enums/PaymentMode";

export default interface IBaseBill {
  Name: string;
  Price: number;
  Id: string;
  PaymentMode: PaymentMode;
}
