import * as React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

interface KeyBoardDismissProps {}

const KeyBoardDismiss: React.FC<KeyBoardDismissProps> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>{props.children}</View>
    </TouchableWithoutFeedback>
  );
};

export { KeyBoardDismiss };
