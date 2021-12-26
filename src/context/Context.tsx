import React, { createContext } from "react";
import IBill from "../interfaces/Bill/IBill";
import User from "../interfaces/User/IUser";
import UserPay from "../interfaces/User/IUserPay";

interface IContext {
  users: User[];
  bills: IBill[];
  userPay: UserPay[];
  dispatchAction: (actionType: ActionType, payload: any) => boolean;
}

enum ActionType {
  ADD_USER = 0,
  ADD_BILL = 1,
  ADD_USER_PAY = 2,
}

const getProdContext = (): IContext => {
  return {
    users: [],
    bills: [],
    userPay: [],
    dispatchAction: (actionType: ActionType, payload: any) => false,
  };
};

const AppContext = createContext<IContext>(getProdContext());

export { AppContext, IContext, ActionType };
