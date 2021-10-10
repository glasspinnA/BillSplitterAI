import IBillPaymentInfo from "../Bill/IBillPaymentInfo";
import User from "./IUser";

export default interface UserPay extends User {
  TotalSumToPay: number;
  SumToPayIncomeBased: IBillPaymentInfo[];
  SumToPayEvenBased: IBillPaymentInfo[];
}
