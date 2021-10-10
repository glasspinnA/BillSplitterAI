import { PaymentMode } from "../../enums/PaymentMode";
import IBaseBill from "./IBaseBill";
import IUser from "./../User/IUser";

export default interface IBill extends IBaseBill {
  PaymentMode: PaymentMode;
  Payers: IUser[];
}

export type RecordBill = Record<PaymentMode, IBill[]>;
