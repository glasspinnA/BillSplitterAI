import * as React from "react";
import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import { Colors } from "../styles/Colors";
import { Text } from "./Text";

interface RadioButtonProps {
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const onPress = () => {
    props.onChange && props.onChange(!props.isChecked);
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View isChecked={props.isChecked}>
        <Text>{props.children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const getCheckedStateColor = (isChecked: boolean | undefined): string => {
  return isChecked ? Colors.Basics.PRIMARY : "transparent";
};
const View = styled.View`
  margin-horizontal: 2;
  padding-vertical: 10;
  padding-horizontal: 16;
  border-radius: 9;
  background: ${(props: RadioButtonProps) => getCheckedStateColor(props.isChecked)};
  border-width: 2;
  border-color: ${(props: RadioButtonProps) => (props.isChecked ? "orange" : Colors.TextInput.HINT)};
`;

export { RadioButton };
