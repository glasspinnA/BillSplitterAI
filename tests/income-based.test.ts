import { PaymentMode } from "../src/enums/PaymentMode";
import {
  GetTotalIncome,
  GetPercentage,
  CalculateIncomeBased,
  EvenlyDistributedSumToPay,
} from "../src/helpers/CalculationHelper";
import Bill from "../src/interfaces/Bill/IBill";
import IBillPaymentInfo from "../src/interfaces/Bill/IBillPaymentInfo";
import User from "../src/interfaces/User/IUser";
import UserPay from "../src/interfaces/User/IUserPay";
import { GET_EXTRA_USER, USERS } from "./constants/constants";

test("Calculate_IncomeBasedPayment_ShouldReturnIncomeBasedSumToPay", () => {
  const users = USERS;
  const bill = [
    {
      Name: "Godi",
      Price: 20,
      PaymentMode: PaymentMode.EVEN_PAYED,
      Payers: users,
    },
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
  const actucal = expect(Calculate(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(2);
});

test("2", () => {
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
  const actucal = expect(Calculate(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(2);
});

test("3", () => {
  const bill = [] as Bill[];
  const expected = [] as UserPay[];
  const actucal = expect(Calculate(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(0);
});

test("4", () => {
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
  const actucal = expect(Calculate(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(2);
});

test("5", () => {
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
  const actucal = expect(Calculate(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(2);
});

test("6", () => {
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
  const actucal = expect(Calculate(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(3);
});

test("7", () => {
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
  const actucal = expect(Calculate(bill));
  actucal.toMatchObject(expected);
  actucal.toHaveLength(3);
});

const Calculate = (bills: Bill[]) => {
  const userPays = GetUnqiueUsersFromBills(bills);
  bills.forEach((bill) => Merg(bill, userPays));
  return Array.from(userPays.values());
};

const GetUnqiueUsersFromBills = (bills: Bill[]): Map<string, UserPay> => {
  const userMap = new Map<string, UserPay>();
  bills.forEach((bill) => {
    bill.Payers.forEach((user) => {
      if (!userMap.has(user.Id)) {
        userMap.set(user.Id, UserToUserPay(user));
      }
    });
  });
  return userMap;
};

const UserToUserPay = (user: User): UserPay => {
  return {
    Id: user.Id,
    Income: user.Income,
    Name: user.Name,
    TotalSumToPay: 0,
    SumToPayIncomeBased: [],
    SumToPayEvenBased: [],
  } as UserPay;
};

const Merg = (bill: Bill, userPay: Map<string, UserPay>) => {
  bill.Payers.forEach((payer) => {
    const isExistingUser = userPay.has(payer.Id);
    if (isExistingUser) {
      const user = userPay.get(payer.Id);
      const sumToPay = ShouldCalculateAsIncomeBased(bill.PaymentMode) ? GetIncomeBased(bill, payer) : GetEven(bill);
      ShouldCalculateAsIncomeBased(bill.PaymentMode)
        ? user!.SumToPayIncomeBased.push(GetBillPaymentInfo(bill, sumToPay))
        : user!.SumToPayEvenBased.push(GetBillPaymentInfo(bill, sumToPay));
      user!.TotalSumToPay += sumToPay;
    }
  });
};

const GetIncomeBased = (bill: Bill, payer: User) =>
  CalculateIncomeBased(GetPercentage(GetTotalIncome(bill.Payers), bill.Price), payer.Income);

const GetEven = (bill: Bill) => EvenlyDistributedSumToPay(bill.Price, bill.Payers.length);

const GetBillPaymentInfo = (bill: Bill, SumToPay: number): IBillPaymentInfo => {
  return {
    Name: bill.Name,
    Price: bill.Price,
    SumForUserToPay: SumToPay,
  };
};

const ShouldCalculateAsIncomeBased = (paymentMode: PaymentMode) => paymentMode == PaymentMode.INCOME_BASED_PAYED;
