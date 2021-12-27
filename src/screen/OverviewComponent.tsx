import { useNavigation } from "@react-navigation/native";
import { Button } from "@ui-kitten/components";
import * as React from "react";
import { View } from "react-native";
import { AddButton } from "../component/AddButton";
import { Header } from "../component/ScreenHeader";
import { ScreenName } from "../constant/ScreenName";

export interface OverviewComponentProps {
  overviewTitle: string;
  buttonTitle: string;
  sceenToNavigate: ScreenName;
  flatlist: JSX.Element;
  navigateButtonAction?: INavigateActionButton;
}

export interface INavigateActionButton {
  title: string;
  actionToPerform?(): void;
  screenToNavigate: ScreenName;
}

export function OverviewComponent(props: OverviewComponentProps) {
  const navigation = useNavigation();

  const navigate = (screenName: ScreenName) => {
    navigation.navigate(screenName as never);
  };

  const onNavigateButtonPress = () => {
    if (props.navigateButtonAction != undefined) {
      props.navigateButtonAction.actionToPerform && props.navigateButtonAction?.actionToPerform();
      navigate(props.navigateButtonAction.screenToNavigate);
    }
  };

  return (
    <>
      <Header>{props.overviewTitle}</Header>
      <View style={{ flex: 2 }}>{props.flatlist}</View>
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <View>
          <AddButton onPress={() => navigate(props.sceenToNavigate)}>{props.buttonTitle}</AddButton>
        </View>
        {props.navigateButtonAction && (
          <View>
            <Button onPress={onNavigateButtonPress}>{props.navigateButtonAction.title}</Button>
          </View>
        )}
      </View>
    </>
  );
}
