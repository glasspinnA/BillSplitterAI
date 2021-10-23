import React from "react";
import { Button } from "./src/component/Button";
import { RadioButton } from "./src/component/RadioButton";
import { RadioGroup } from "./src/component/RadioGroup";
import { Text } from "./src/component/Text";
import { TextInput } from "./src/component/TextInput";
import { ThemeProvider } from "./src/component/ThemeProvider";
import { BaseScreenContainer } from "./src/containers/BaseScreenContainer";
import { BaseColor } from "./src/enums/BaseColor";
import { FontSize } from "./src/enums/Text/FontSize";

export default function App() {
  const [text, onChangeText] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const onChange = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <ThemeProvider>
      <BaseScreenContainer>
        <Text fontSize={FontSize.P2}>First & Last names</Text>
        <TextInput fontSize={FontSize.H3} placeholder="hello" text={text} onChangeText={onChangeText} />
        <Text fontSize={FontSize.P2}>Email</Text>
        <TextInput fontSize={FontSize.H3} placeholder="hello" text={text} onChangeText={onChangeText} />
        <RadioGroup
          selectedIndex={selectedIndex}
          onChange={(index: number) => {
            onChange(index);
          }}
        >
          <RadioButton color={BaseColor.DANGER}>Important</RadioButton>
          <RadioButton color={BaseColor.WARNING}>Planned</RadioButton>
          <RadioButton color={BaseColor.SUCCESS}>Yet</RadioButton>
        </RadioGroup>
        <Button color={BaseColor.PRIMARY} onPress={() => console.log("hello")}>
          Hello
        </Button>
      </BaseScreenContainer>
    </ThemeProvider>
  );
}
