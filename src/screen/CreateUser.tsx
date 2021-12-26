import * as React from "react";
import { ScreenContainer } from "../component/ScreenContainer";
import { UserForm, t } from "../component/UserFormComponent";
import { KeyBoardDismiss } from "../component/KeyboardDismiss";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../constant/ScreenName";
import { ActionType } from "../context/Context";
import { GET_EXTRA_USER } from "../tests/constants/constants";
import { useAppContext } from "../context/Consumer";
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
  const navigation = useNavigation();
  const { dispatchAction } = useAppContext();

  const onSubmit = (data: any) => {
    console.log(GET_EXTRA_USER);
    dispatchAction(ActionType.ADD_USER, GET_EXTRA_USER);
    navigation.navigate(ScreenName.USER_OVERVIEW as never);
  };
  return (
    <ScreenContainer>
      <KeyBoardDismiss>
        <UserForm data={data} onUserSubmit={onSubmit}></UserForm>
      </KeyBoardDismiss>
    </ScreenContainer>
  );
}
