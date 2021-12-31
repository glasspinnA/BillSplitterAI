import * as React from "react";
import { Button as UI_KITEN_BUTTON } from "@ui-kitten/components/ui/button/button.component";
import { View } from "react-native";

interface ButtonProps {
  onPress(): void;
  accessoryLeft?(): JSX.Element;
  disabled?: boolean;
  size?: string;
  appearance?: string;
}

export const RoundedButton: React.FC<ButtonProps> = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <UI_KITEN_BUTTON
        disabled={props.disabled}
        style={{ borderRadius: 100, minWidth: "80%" }}
        onPress={props.onPress}
        accessoryLeft={props.accessoryLeft}
        size={props.size}
        appearance={props.appearance}
      >
        {props.children as string}
      </UI_KITEN_BUTTON>
    </View>
  );
};
