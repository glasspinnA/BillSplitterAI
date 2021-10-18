import React from "react";
// import { TextInput } from "react-native";
import { Text } from "./src/component/Text";
import { TextInput } from "./src/component/TextInput";
import { BaseScreenContainer } from "./src/containers/BaseScreenContainer";
import { FontSize } from "./src/enums/Text/FontSize";

export default function App() {
  const [text, onChangeText] = React.useState("");
  return (
    <BaseScreenContainer>
      <Text>First & Last names</Text>
      <TextInput fontSize={FontSize.H3} placeholder="hello" text={text} onChangeText={onChangeText} />
    </BaseScreenContainer>
  );
}
