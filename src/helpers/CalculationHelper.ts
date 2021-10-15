import { PaymentMode } from "../enums/PaymentMode";
import User from "../interfaces/User/IUser";
import Bill from "../interfaces/Bill/IBill";

const GetTotalIncomeForAllInvolvedUsers = (payers: User[]): number => payers.reduce((a, { Income }) => a + Income!, 0);
const GetPercentageForBill = (totalIncome: number, billPrice: number) => billPrice / totalIncome;
const CalculateIncomeBasedBill = (percentage: number, income: number): number =>
  ShowSumWithTwoDecimals(percentage * income);
const CalculateEvenBasedBill = (billPrice: number, numberPayers: number): number =>
  ShowSumWithTwoDecimals(billPrice / numberPayers);
const ShouldCalculateBillAsIncomeBased = (paymentMode: PaymentMode) => paymentMode == PaymentMode.INCOME_BASED_PAYED;
const HasUserAlreadyPaidBill = (payerId: string, paidByUserId?: string) => paidByUserId && paidByUserId == payerId;

const GetSumToPayForIncomeBasedBill = (bill: Bill, payer: User): number =>
  CalculateIncomeBasedBill(
    GetPercentageForBill(GetTotalIncomeForAllInvolvedUsers(bill.Payers), bill.Price),
    payer.Income!
  );

const GetSumToPayForEvenBasedBill = (bill: Bill): number => CalculateEvenBasedBill(bill.Price, bill.Payers.length);

export {
  ShouldCalculateBillAsIncomeBased,
  HasUserAlreadyPaidBill,
  GetSumToPayForEvenBasedBill,
  GetSumToPayForIncomeBasedBill,
};
const ShowSumWithTwoDecimals = (sumToPay: number): number => parseFloat(sumToPay.toFixed(1));
