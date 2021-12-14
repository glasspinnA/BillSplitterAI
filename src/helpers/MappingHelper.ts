import IBillPaymentInfo from "../interfaces/Bill/IBillPaymentInfo";
import Bill from "../interfaces/Bill/IBill";
import User from "../interfaces/User/IUser";
import UserPay from "../interfaces/User/IUserPay";
import { IItem } from "../interfaces/IItem";
import { PaymentMode } from "../enums/PaymentMode";

const MapUserToUserPay = (user: User): UserPay => {
  return {
    Id: user.Id,
    Income: user.Income,
    Name: user.Name,
    TotalSumToPay: 0,
    SumToPayIncomeBased: [],
    SumToPayEvenBased: [],
  } as UserPay;
};

const GetBillPaymentInfo = (
  bill: Bill,
  SumToPay: number,
  sumToPayUser?: number
): IBillPaymentInfo => {
  return {
    Id: bill.Id,
    Name: bill.Name,
    Price: bill.Price,
    SumForUserToPay: SumToPay,
    UserToPaySumTo: bill.PaidByUser,
    SumToPayUser: sumToPayUser,
    PaymentMode: bill.PaymentMode,
  };
};

const GetItemData = (
  _title: string,
  _paymentMode: PaymentMode,
  _sumToPay: number
): IItem => {
  return {
    title: _title,
    paymentMode: _paymentMode,
    sumToPay: _sumToPay,
  };
};

export { MapUserToUserPay, GetBillPaymentInfo, GetItemData };
