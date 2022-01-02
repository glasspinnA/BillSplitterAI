import * as React from "react";
import { TouchableWithoutFeedback, View } from "react-native";

interface TextInputOverlayProps {
  onPress: () => void;
}

export const TextInputOverlay: React.FC<TextInputOverlayProps> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        {props.children}
      </View>
    </TouchableWithoutFeedback>
  );
};
