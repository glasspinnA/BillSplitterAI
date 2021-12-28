import * as React from "react";
import { Flatlist } from "../component/baseComponents/Flatlist";
import UserPay from "../interfaces/User/IUserPay";
import { UserPayRenderItem } from "../component/UserPayRenderItem";
import { ScreenContainer } from "../component/ScreenContainer";
import { Header } from "../component/ScreenHeader";
import { useAppContext } from "../context/Consumer";
import { GetDummy_UserPay } from "../tests/constants/constants";

export interface UserPayOverViewScreenProps {}

export function UserPayOverViewScreen(props: UserPayOverViewScreenProps) {
  const { userPay } = useAppContext();

  return (
    <ScreenContainer>
      <Header>Payment {"\n"}Overview</Header>
      <Flatlist<UserPay>
        items={userPay}
        keyExtractor={(item: UserPay) => item.Id}
        renderItem={(x) => <UserPayRenderItem item={x.item} />}
      />
    </ScreenContainer>
  );
}
