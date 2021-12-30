import { CalculateSumsToPay } from "../CalculateBill";
import { PaymentMode } from "../enums/PaymentMode";
import Bill from "../interfaces/Bill/IBill";
import IBillPaymentInfo from "../interfaces/Bill/IBillPaymentInfo";
import UserPay from "../interfaces/User/IUserPay";
import { GetDummy_Bills, GET_EXTRA_USER, USERS } from "./constants/constants";
test("1", () => {
  const users = USERS;
  const bill = GetDummy_Bills();
  const expected = [
    {
      Id: users[0].Id,
      Income: users[0].Income,
      Name: users[0].Name,
      TotalSumToPay: 200,
      SumToPayIncomeBased: [{ SumForUserToPay: 190 }],
      SumToPayEvenBased: [{ SumForUserToPay: 10 }],
    },
    {
      Id: users[1].Id,
      Income: users[1].Income,
      Name: users[1].Name,
      TotalSumToPay: 390,
      SumToPayIncomeBased: [{ SumForUserToPay: 380 }],
      SumToPayEvenBased: [{ SumForUserToPay: 10 }],
    },
  ] as UserPay[];
  const actucal = expect(CalculateSumsToPay(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(2);
});
test("Calculate_EvenBasedBill_ShouldReturnEvenSumToPay", () => {
  const users = USERS;
  const bill = [
    {
      Name: "Godi",
      Price: 20,
      PaymentMode: PaymentMode.EVEN_PAYED,
      Payers: users,
    },
  ] as Bill[];

  const expected = [
    {
      Id: users[0].Id,
      Income: users[0].Income,
      Name: users[0].Name,
      TotalSumToPay: 10,
      SumToPayIncomeBased: [] as IBillPaymentInfo[],
      SumToPayEvenBased: [{ SumForUserToPay: 10 }],
    },
    {
      Id: users[1].Id,
      Income: users[1].Income,
      Name: users[1].Name,
      TotalSumToPay: 10,
      SumToPayIncomeBased: [] as IBillPaymentInfo[],
      SumToPayEvenBased: [{ SumForUserToPay: 10 }],
    },
  ] as UserPay[];
  const actucal = expect(CalculateSumsToPay(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(2);
});
test("Calculate_NoBills_ShouldReturnEmpty", () => {
  const bill = [] as Bill[];
  const expected = [] as UserPay[];
  const actucal = expect(CalculateSumsToPay(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(0);
});
test("Calculate_IncomeBasedBill_ShouldReturnIncomeBasedSumToPay", () => {
  const users = USERS;
  const bill = [
    {
      Name: "Hyra",
      Price: 570,
      PaymentMode: PaymentMode.INCOME_BASED_PAYED,
      Payers: users,
    },
  ] as Bill[];

  const expected = [
    {
      Id: users[0].Id,
      Income: users[0].Income,
      Name: users[0].Name,
      TotalSumToPay: 190,
      SumToPayIncomeBased: [{ SumForUserToPay: 190 }],
      SumToPayEvenBased: [] as IBillPaymentInfo[],
    },
    {
      Id: users[1].Id,
      Income: users[1].Income,
      Name: users[1].Name,
      TotalSumToPay: 380,
      SumToPayIncomeBased: [{ SumForUserToPay: 380 }],
      SumToPayEvenBased: [] as IBillPaymentInfo[],
    },
  ] as UserPay[];
  const actucal = expect(CalculateSumsToPay(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(2);
});
test("Calculate_MultipleIncomeBasedBills_ShouldReturnIncomeBasedSumsToPay", () => {
  const users = USERS;
  const bill = [
    {
      Name: "Hyra",
      Price: 570,
      PaymentMode: PaymentMode.INCOME_BASED_PAYED,
      Payers: users,
    },
    {
      Name: "Flygbiljett",
      Price: 600,
      PaymentMode: PaymentMode.INCOME_BASED_PAYED,
      Payers: users,
    },
  ] as Bill[];

  const expected = [
    {
      Id: users[0].Id,
      Income: users[0].Income,
      Name: users[0].Name,
      TotalSumToPay: 390,
      SumToPayIncomeBased: [{ SumForUserToPay: 190 }, { SumForUserToPay: 200 }],
      SumToPayEvenBased: [] as IBillPaymentInfo[],
    },
    {
      Id: users[1].Id,
      Income: users[1].Income,
      Name: users[1].Name,
      TotalSumToPay: 780,
      SumToPayIncomeBased: [{ SumForUserToPay: 380 }, { SumForUserToPay: 400 }],
      SumToPayEvenBased: [] as IBillPaymentInfo[],
    },
  ] as UserPay[];
  const actucal = expect(CalculateSumsToPay(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(2);
});
test("Calculate_ThreePayersToSplitBills_ShouldReturnSumToPayForThreeUsers", () => {
  const users = USERS;
  const extraUser = GET_EXTRA_USER;
  const bill = [
    {
      Name: "Hyra",
      Price: 3000,
      PaymentMode: PaymentMode.EVEN_PAYED,
      Payers: users.concat(extraUser),
    },
    {
      Name: "Flygbiljett",
      Price: 600,
      PaymentMode: PaymentMode.INCOME_BASED_PAYED,
      Payers: users,
    },
  ] as Bill[];

  const expected = [
    {
      Id: users[0].Id,
      Income: users[0].Income,
      Name: users[0].Name,
      TotalSumToPay: 1200,
      SumToPayIncomeBased: [{ SumForUserToPay: 200 }],
      SumToPayEvenBased: [{ SumForUserToPay: 1000 }] as IBillPaymentInfo[],
    },
    {
      Id: users[1].Id,
      Income: users[1].Income,
      Name: users[1].Name,
      TotalSumToPay: 1400,
      SumToPayIncomeBased: [{ SumForUserToPay: 400 }],
      SumToPayEvenBased: [{ SumForUserToPay: 1000 }] as IBillPaymentInfo[],
    },
    {
      Id: extraUser.Id,
      Income: extraUser.Income,
      Name: extraUser.Name,
      TotalSumToPay: 1000,
      SumToPayIncomeBased: [] as IBillPaymentInfo[],
      SumToPayEvenBased: [{ SumForUserToPay: 1000 }] as IBillPaymentInfo[],
    },
  ] as UserPay[];
  const actucal = expect(CalculateSumsToPay(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(3);
});
test("Calculate_Bills_ShouldReturnSumToPayAsOnePointDecimal", () => {
  const users = USERS;
  const extraUser = GET_EXTRA_USER;
  const bill = [
    {
      Name: "Hyra",
      Price: 3000,
      PaymentMode: PaymentMode.INCOME_BASED_PAYED,
      Payers: users.concat(extraUser),
    },
    {
      Name: "Flygbiljett",
      Price: 600,
      PaymentMode: PaymentMode.INCOME_BASED_PAYED,
      Payers: users,
    },
  ] as Bill[];

  const expected = [
    {
      Id: users[0].Id,
      Income: users[0].Income,
      Name: users[0].Name,
      TotalSumToPay: 1183.6,
      SumToPayIncomeBased: [{ SumForUserToPay: 983.6 }, { SumForUserToPay: 200 }] as IBillPaymentInfo[],
      SumToPayEvenBased: [] as IBillPaymentInfo[],
    },
    {
      Id: users[1].Id,
      Income: users[1].Income,
      Name: users[1].Name,
      TotalSumToPay: 2367.2,
      SumToPayIncomeBased: [{ SumForUserToPay: 1967.2 }, { SumForUserToPay: 400 }],
      SumToPayEvenBased: [] as IBillPaymentInfo[],
    },
    {
      Id: extraUser.Id,
      Income: extraUser.Income,
      Name: extraUser.Name,
      TotalSumToPay: 49.2,
      SumToPayIncomeBased: [{ SumForUserToPay: 49.2 }] as IBillPaymentInfo[],
      SumToPayEvenBased: [] as IBillPaymentInfo[],
    },
  ] as UserPay[];
  const actucal = expect(CalculateSumsToPay(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(3);
});
test("Calculate_IncomeBasedBillAlreadyPaid_ShouldReturnSumUserToPayPayer", () => {
  const users = USERS;
  const bill = [
    {
      Name: "Hyra",
      Price: 3000,
      PaymentMode: PaymentMode.INCOME_BASED_PAYED,
      Payers: users,
      PaidByUser: users[0],
    },
  ] as Bill[];

  const expected = [
    {
      Id: users[0].Id,
      Income: users[0].Income,
      Name: users[0].Name,
      TotalSumToPay: 0,
      SumToPayIncomeBased: [] as IBillPaymentInfo[],
      SumToPayEvenBased: [] as IBillPaymentInfo[],
    },
    {
      Id: users[1].Id,
      Income: users[1].Income,
      Name: users[1].Name,
      TotalSumToPay: 2000,
      SumToPayIncomeBased: [{ SumForUserToPay: 2000, UserToPaySumTo: users[0], SumToPayUser: 1000 }],
      SumToPayEvenBased: [] as IBillPaymentInfo[],
    },
  ] as UserPay[];
  const actucal = expect(CalculateSumsToPay(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(2);
});
test("Calculate_EvenBasedBillAlreadyPaid_ShouldReturnSumUserToPayPayer", () => {
  const users = USERS.concat(GET_EXTRA_USER);
  const bill = [
    {
      Name: "Hyra",
      Price: 3000,
      PaymentMode: PaymentMode.EVEN_PAYED,
      Payers: users,
      PaidByUser: users[0],
    },
  ] as Bill[];

  const expected = [
    {
      Id: users[0].Id,
      Income: users[0].Income,
      Name: users[0].Name,
      TotalSumToPay: 0,
      SumToPayIncomeBased: [] as IBillPaymentInfo[],
      SumToPayEvenBased: [] as IBillPaymentInfo[],
    },
    {
      Id: users[1].Id,
      Income: users[1].Income,
      Name: users[1].Name,
      TotalSumToPay: 1000,
      SumToPayIncomeBased: [] as IBillPaymentInfo[],
      SumToPayEvenBased: [
        { SumForUserToPay: 1000, UserToPaySumTo: users[0], SumToPayUser: 1000 },
      ] as IBillPaymentInfo[],
    },
    {
      Id: users[2].Id,
      Income: users[2].Income,
      Name: users[2].Name,
      TotalSumToPay: 1000,
      SumToPayIncomeBased: [] as IBillPaymentInfo[],
      SumToPayEvenBased: [
        { SumForUserToPay: 1000, UserToPaySumTo: users[0], SumToPayUser: 1000 },
      ] as IBillPaymentInfo[],
    },
  ] as UserPay[];
  const actucal = expect(CalculateSumsToPay(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(3);
});
