import * as React from "react";
import { ScreenContainer } from "../component/ScreenContainer";
import { UserForm } from "../component/form/UserFormComponent";
import { KeyBoardDismiss } from "../component/KeyboardDismiss";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../constant/ScreenName";
import { ActionType } from "../context/Context";
import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../context/Consumer";
import User from "../interfaces/User/IUser";
import { FormContent } from "../interfaces/IFormData";
import { Header } from "../component/ScreenHeader";
export interface CreateUserScreenProps {}
export function CreateUserScreen(props: CreateUserScreenProps) {
  const data: FormContent[] = [
    {
      Text: "Name",
      Placeholder: "First & last name",
      ErrorMessage: "Required",
      Name: "Name",
      Numeric: false,
    },
    {
      Text: "Income",
      Placeholder: "Income",
      ErrorMessage: "Required",
      Name: "Income",
      Numeric: true,
    },
  ];
  const navigation = useNavigation();
  const { dispatchAction } = useAppContext();

  const onSubmit = (data: any) => {
    const user: User = {
      Name: data.Name,
      Id: uuidv4(),
      Income: data.Income,
    };
    dispatchAction(ActionType.ADD_USER, user);
    navigation.navigate(ScreenName.USER_OVERVIEW as never);
  };
  return (
    <ScreenContainer>
      <KeyBoardDismiss>
        <Header>Create{"\n"}New User</Header>
        <UserForm data={data} onUserSubmit={onSubmit}></UserForm>
      </KeyBoardDismiss>
    </ScreenContainer>
  );
}
