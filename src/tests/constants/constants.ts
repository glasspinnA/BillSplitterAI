import { v4 as uuidv4 } from "uuid";
import { PaymentMode } from "../../enums/PaymentMode";
import Bill from "../../interfaces/Bill/IBill";
import IBillPaymentInfo from "../../interfaces/Bill/IBillPaymentInfo";
import User from "../../interfaces/User/IUser";
import UserPay from "../../interfaces/User/IUserPay";
export const USERS = [
  { Id: uuidv4(), Name: "Vision", Income: 10000 },
  { Id: uuidv4(), Name: "Black Widow", Income: 20000 },
] as User[];

export const GetDummy_Bills = (): Bill[] => {
  return [
    {
      Id: uuidv4(),
      Name: "Godi",
      Price: 20,
      PaymentMode: PaymentMode.EVEN_PAYED,
      Payers: USERS,
    },
    {
      Id: uuidv4(),
      Name: "Hyra",
      Price: 570,
      PaymentMode: PaymentMode.INCOME_BASED_PAYED,
      Payers: USERS,
    },
  ];
};

export const GetDummy_Users = () => USERS;
export const GetDummy_UserPay = (): UserPay[] => {
  return [
    {
      Id: USERS[0].Id,
      Income: USERS[0].Income,
      Name: USERS[0].Name,
      TotalSumToPay: 1000,
      SumToPayIncomeBased: [
        {
          SumForUserToPay: 100,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 100,
          Name: GetDummy_Bills()[1].Name,
        },
      ] as IBillPaymentInfo[],
      SumToPayEvenBased: [
        {
          SumForUserToPay: 1000,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 1000,
          Name: GetDummy_Bills()[0].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
      ] as IBillPaymentInfo[],
    },
    {
      Id: USERS[1].Id,
      Income: USERS[1].Income,
      Name: USERS[1].Name,
      TotalSumToPay: 1200,
      SumToPayIncomeBased: [
        {
          SumForUserToPay: 100,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 100,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 20,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 20,
          Name: GetDummy_Bills()[0].Name,
        },
      ] as IBillPaymentInfo[],
      SumToPayEvenBased: [
        {
          SumForUserToPay: 1000,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 1000,
          Name: GetDummy_Bills()[0].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
        {
          SumForUserToPay: 200,
          UserToPaySumTo: USERS[0],
          SumToPayUser: 200,
          Name: GetDummy_Bills()[1].Name,
        },
      ] as IBillPaymentInfo[],
    },
  ] as UserPay[];
};

export const GET_EXTRA_USER = {
  Id: uuidv4(),
  Name: "NAME",
  Income: 500,
} as User;

export const GET_EXTRA_BILL = {
  Id: uuidv4(),
  Name: "Hus",
  Price: 570,
  PaymentMode: PaymentMode.INCOME_BASED_PAYED,
  Payers: USERS,
};
