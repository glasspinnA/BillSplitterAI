import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { AddButton } from "../component/AddButton";
import { Header } from "../component/ScreenHeader";
import { ScreenName } from "../constant/ScreenName";

export interface OverviewComponentProps {
  overviewTitle: string;
  buttonTitle: string;
  sceenToNavigate: ScreenName;
  flatlist: JSX.Element;
}

export function OverviewComponent(props: OverviewComponentProps) {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate(props.sceenToNavigate as never);
  };
  return (
    <>
      <Header>{props.overviewTitle}</Header>
      {props.flatlist}
      <AddButton onPress={navigate}>{props.buttonTitle}</AddButton>
    </>
  );
}
