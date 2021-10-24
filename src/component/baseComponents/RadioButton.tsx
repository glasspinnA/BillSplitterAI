import * as React from "react";
import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import { Text } from "./Text";
import { borderRadiusWrapper, sharedPadding } from "../../styles/SharedStyles";
import { BaseColor } from "../../enums/BaseColor";
import { getHEXColor, getTextColorByBaseColor } from "../../helpers/StyleHelpers";
import Color from "color";

interface RadioButtonProps {
  isChecked?: boolean;
  color: BaseColor;
  onChange?: (checked: boolean) => void;
}
const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const onPress = () => {
    props.onChange && props.onChange(!props.isChecked);
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View isChecked={props.isChecked} color={props.color}>
        <Text color={getTextColorByBaseColor(props.color)}>{props.children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const View = styled.View`
  ${borderRadiusWrapper}
  ${sharedPadding}
  background: ${(props: RadioButtonProps) => getHEXColor(props.isChecked ? props.color : undefined)};
  border-width: 2px;
  border-color: ${(props: RadioButtonProps) =>
    Color(getHEXColor(props.isChecked ? props.color : undefined))
      .darken(0.2)
      .hex()};
`;

export { RadioButton };
