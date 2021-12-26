import * as React from "react";
import { GetDummy_Bills, GetDummy_UserPay, GetDummy_Users } from "../tests/constants/constants";
import { ActionType, AppContext, IContext } from "./Context";

interface ContextProviderProps {}

const ContextProvider: React.FC<ContextProviderProps> = (props) => {
  const [users, setUsers] = React.useState(GetDummy_Users());
  const [bills, setBills] = React.useState(GetDummy_Bills());
  const [userPay, setUserPay] = React.useState(GetDummy_UserPay());

  const dispatchAction = (actionType: ActionType, payload: any): void => {
    switch (actionType) {
      case ActionType.ADD_BILL:
        console.log(payload);
        setBills([...bills, payload]);
        break;
      case ActionType.ADD_USER:
        setUsers([...users, payload]);
        console.log(users);
        break;
      case ActionType.ADD_USER_PAY:
        setUserPay([...userPay, payload]);
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
