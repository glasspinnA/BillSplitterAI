import { useNavigation } from "@react-navigation/native";
import { Button } from "@ui-kitten/components";
import * as React from "react";
import { View } from "react-native";
import { AddButton } from "../component/AddButton";
import { RoundedButton } from "../component/baseComponents/Button";
import { Header } from "../component/ScreenHeader";
import { ScreenName } from "../constant/ScreenName";

export interface OverviewComponentProps {
  overviewTitle: string;
  buttonTitle: string;
  sceenToNavigate: ScreenName;
  flatlist: JSX.Element;
  navigateButtonAction?: INavigateActionButton;
  extraComponent?: JSX.Element;
}

export interface INavigateActionButton {
  title: string;
  actionToPerform?(): void;
  screenToNavigate: ScreenName;
  shouldDisable?: boolean;
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
      {props.extraComponent && <View>{props.extraComponent}</View>}
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <View>
          <AddButton onPress={() => navigate(props.sceenToNavigate)}>{props.buttonTitle}</AddButton>
        </View>
        {props.navigateButtonAction && (
          <View>
            <RoundedButton disabled={props.navigateButtonAction.shouldDisable} onPress={onNavigateButtonPress}>
              {props.navigateButtonAction.title}
            </RoundedButton>
          </View>
        )}
      </View>
    </>
  );
}
