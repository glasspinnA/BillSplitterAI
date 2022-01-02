import * as React from "react";
import { Button, KeyboardAvoidingView as KAV, Platform, useWindowDimensions } from "react-native";

interface KeyboardAvoidingViewProps {
  onPress: () => void;
  isVisible: boolean;
}

export const KeyboardAvoidingView: React.FC<KeyboardAvoidingViewProps> = (props) => {
  return (
    <KAV
      keyboardVerticalOffset={10}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        position: "absolute",
        right: 0,
        bottom: 5,
        backgroundColor: "lightgrey",
        width: useWindowDimensions().width,
        alignItems: "flex-end",
        opacity: props.isVisible ? 1 : 0,
      }}
    >
      <Button title="Submit" onPress={props.onPress} />
    </KAV>
  );
};
