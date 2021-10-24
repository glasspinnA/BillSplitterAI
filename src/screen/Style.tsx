import * as React from "react";
import { Button } from "../component/Button";
import { Text } from "../component/Text";
import { RadioButton } from "../component/RadioButton";
import { RadioGroup } from "../component/RadioGroup";
import { TextInput } from "../component/TextInput";
import { BaseColor } from "../enums/BaseColor";
import { FontSize } from "../enums/Text/FontSize";
export interface StyleScreenProps {}

export function StyleScreen(props: StyleScreenProps) {
  const [text, onChangeText] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const onChange = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <>
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
    </>
  );
}
