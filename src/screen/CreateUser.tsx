import * as React from "react";
import { ScreenContainer } from "../component/ScreenContainer";
import { UserForm, t } from "../component/UserFormComponent";
import { KeyBoardDismiss } from "../component/KeyboardDismiss";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../constant/ScreenName";
export interface CreateUserScreenProps {}
export function CreateUserScreen(props: CreateUserScreenProps) {
  const data: t[] = [
    {
      Text: "First & \nLast name",
      Placeholder: "Enter first & last name",
      ErrorMessage: "Required",
      Name: "Name",
      Numeric: false,
    },
    {
      Text: "Income",
      Placeholder: "Enter your income",
      ErrorMessage: "Required",
      Name: "Email",
      Numeric: true,
    },
  ];
  const [users, setUsers] = React.useState([]);
  const navigation = useNavigation();
  const onSubmit = (data: any) => {
    setUsers([data, ...users]);
    navigation.navigate(ScreenName.BILLING_OVERVIEW as never);
  };
  return (
    <ScreenContainer>
      <KeyBoardDismiss>
        <UserForm data={data} onUserSubmit={onSubmit}></UserForm>
      </KeyBoardDismiss>
    </ScreenContainer>
  );
}
