import * as React from "react";
import { Flatlist } from "../component/baseComponents/Flatlist";
import UserPay from "../interfaces/User/IUserPay";
import { GetDummy_UserPay } from "../tests/constants/constants";
import { UserPayRenderItem } from "../component/UserPayRenderItem";

export interface UserPayOverViewScreenProps {}

export function UserPayOverViewScreen(props: UserPayOverViewScreenProps) {
  return (
    <Flatlist<UserPay>
      items={GetDummy_UserPay()}
      keyExtractor={(item: UserPay) => item.Id}
      renderItem={(x) => <UserPayRenderItem item={x.item} />}
    />
  );
}
