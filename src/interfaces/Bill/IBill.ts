import BaseBill from "./IBaseBill";
import User from "./../User/IUser";

export default interface IBill extends BaseBill {
  Payers: User[];
  PaidByUser?: User;
}
