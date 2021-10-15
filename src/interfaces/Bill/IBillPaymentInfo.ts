import User from "../User/IUser";
import IBaseBill from "./IBaseBill";

export default interface IBillPaymentInfo extends IBaseBill {
  SumForUserToPay: number;
  UserToPaySumTo?: User;
  SumToPayUser?: number;
}
