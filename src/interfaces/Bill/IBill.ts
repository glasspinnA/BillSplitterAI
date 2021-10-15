import { PaymentMode } from "../../enums/PaymentMode";
import BaseBill from "./IBaseBill";
import User from "./../User/IUser";

export default interface IBill extends BaseBill {
  PaymentMode: PaymentMode;
  Payers: User[];
  PaidByUser?: User;
}
