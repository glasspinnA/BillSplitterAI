import * as React from "react";
import { GetDummy_Bills, GetDummy_UserPay, GetDummy_Users } from "../tests/constants/constants";
import { ActionType, AppContext, IContext } from "./Context";

interface ContextProviderProps {}

const ContextProvider: React.FC<ContextProviderProps> = (props) => {
  const masterSwitch = false;
  const [users, setUsers] = React.useState(masterSwitch && __DEV__ ? GetDummy_Users() : []);
  const [bills, setBills] = React.useState(masterSwitch && __DEV__ ? GetDummy_Bills() : []);
  const [userPay, setUserPay] = React.useState(masterSwitch && __DEV__ ? GetDummy_UserPay() : []);

  const dispatchAction = (actionType: ActionType, payload: any): void => {
    switch (actionType) {
      case ActionType.ADD_BILL:
        setBills([...bills, payload]);
        break;
      case ActionType.ADD_USER:
        setUsers([...users, payload]);
        break;
      case ActionType.ADD_USER_PAY:
        setUserPay([...userPay, ...payload]);
        break;
      default:
        break;
    }
  };

  const values = {
    users,
    bills,
    userPay,
    dispatchAction,
  } as IContext;

  return <AppContext.Provider value={values}>{props.children}</AppContext.Provider>;
};

export default ContextProvider;
