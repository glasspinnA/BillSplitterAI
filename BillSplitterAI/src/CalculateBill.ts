import {
  HasUserAlreadyPaidBill,
  ShouldCalculateBillAsIncomeBased,
  GetSumToPayForIncomeBasedBill,
  GetSumToPayForEvenBasedBill,
} from "./helpers/CalculationHelper";
import { GetBillPaymentInfo, MapUserToUserPay } from "./helpers/MappingHelper";
import User from "./interfaces/User/IUser";
import Bill from "./interfaces/Bill/IBill";
import UserPay from "./interfaces/User/IUserPay";

const CalculateSumsToPay = (bills: Bill[]): UserPay[] => {
  const payers = GetUnqiueUsersFromBills(bills);
  bills.forEach((bill) => CalculateBill(bill, payers));
  return Array.from(payers.values());
};
const GetUnqiueUsersFromBills = (bills: Bill[]): Map<string, UserPay> => {
  const userMap = new Map<string, UserPay>();
  bills.forEach((bill) => {
    bill.Payers.forEach((user) => {
      if (!userMap.has(user.Id)) {
        userMap.set(user.Id, MapUserToUserPay(user));
      }
    });
  });
  return userMap;
};
const CalculateBill = (bill: Bill, userPay: Map<string, UserPay>) => {
  bill.Payers.forEach((payer) => {
    const isExistingUser = userPay.has(payer.Id);
    if (isExistingUser) {
      if (HasUserAlreadyPaidBill(payer.Id, bill.PaidByUser?.Id)) {
        return;
      }
      const user = userPay.get(payer.Id);
      AddSumUserShouldPay(bill, user!, payer);
    }
  });
};
const AddSumUserShouldPay = (bill: Bill, userPayer: UserPay, payer: User) => {
  const sumToPayForBill = GetSumToPayForBill(bill, userPayer);
  const sumToPayPaidUser = GetSumUserShouldPayPaidUser(bill);
  ShouldCalculateBillAsIncomeBased(bill.PaymentMode)
    ? userPayer!.SumToPayIncomeBased.push(GetBillPaymentInfo(bill, sumToPayForBill, sumToPayPaidUser))
    : userPayer!.SumToPayEvenBased.push(GetBillPaymentInfo(bill, sumToPayForBill, sumToPayPaidUser));
  userPayer!.TotalSumToPay += sumToPayForBill;
};
const GetSumUserShouldPayPaidUser = (bill: Bill): number | undefined => {
  if (bill.PaidByUser) return GetSumToPayForBill(bill, bill.PaidByUser);
  return undefined;
};
const GetSumToPayForBill = (bill: Bill, payer: User) => {
  return ShouldCalculateBillAsIncomeBased(bill.PaymentMode)
    ? GetSumToPayForIncomeBasedBill(bill, payer)
    : GetSumToPayForEvenBasedBill(bill);
};

export { CalculateSumsToPay };
