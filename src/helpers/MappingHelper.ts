import IBillPaymentInfo from "../interfaces/Bill/IBillPaymentInfo";
import Bill from "../interfaces/Bill/IBill";
import User from "../interfaces/User/IUser";
import UserPay from "../interfaces/User/IUserPay";

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

const GetBillPaymentInfo = (bill: Bill, SumToPay: number, sumToPayUser?: number): IBillPaymentInfo => {
  return {
    Id: bill.Id,
    Name: bill.Name,
    Price: bill.Price,
    SumForUserToPay: SumToPay,
    UserToPaySumTo: bill.PaidByUser,
    SumToPayUser: sumToPayUser,
  };
};

export { MapUserToUserPay, GetBillPaymentInfo };
