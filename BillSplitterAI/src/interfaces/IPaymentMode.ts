// import { PaymentMode } from "../enums/PaymentMode";
// import IBillPaymentInfo from "./Bill/IBillPaymentInfo";
// export type IPaymentMode = Record<PaymentMode, IBillPaymentInfo[]>;
// // export type IPaymentMode = Record<PaymentMode, number>;
// export type IPaymentModeString = Record<PaymentMode, string>;

// export type colorsInterface = {
//   [key in PaymentMode]: string;
// };

export default interface PaymentMode {
  Income: [];
  EvenBased: [];
}
