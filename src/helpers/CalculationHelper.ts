import User from "../interfaces/User/IUser";
const GetTotalIncome = (payers: User[]): number => payers.reduce((a, { Income }) => a + Income, 0);
const GetPercentage = (totalIncome: number, billPrice: number) => billPrice / totalIncome;
const CalculateIncomeBased = (percentage: number, income: number): number =>
  ShowSumWithTwoDecimals(percentage * income);
const EvenlyDistributedSumToPay = (billPrice: number, numberPayers: number): number =>
  ShowSumWithTwoDecimals(billPrice / numberPayers);
export { GetTotalIncome, GetPercentage, CalculateIncomeBased, EvenlyDistributedSumToPay };
const ShowSumWithTwoDecimals = (sumToPay: number): number => parseFloat(sumToPay.toFixed(1));
