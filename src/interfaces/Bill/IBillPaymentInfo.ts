import IBaseBill from "./IBaseBill";

export default interface IBillPaymentInfo extends IBaseBill {
  SumForUserToPay: number;
}
