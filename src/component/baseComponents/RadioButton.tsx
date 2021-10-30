import * as React from "react";
import { TouchableWithoutFeedback } from "react-native";
import styled, { DefaultTheme, useTheme } from "styled-components/native";
import { Text } from "./Text";
import { borderRadiusWrapper, sharedPadding } from "../../styles/SharedStyles";
import { BaseColor } from "../../enums/BaseColor";
import { getHEXColor, getTextColorByBaseColor } from "../../helpers/StyleHelpers";
import Color from "color";
import { IButtonChildProps } from "../../interfaces/IButtonChild";
import { PaymentMode } from "../../enums/PaymentMode";

const RadioButton = <T extends {}>(props: IButtonChildProps<T> & { children: React.ReactNode }) => {
  const theme = useTheme();
  const onPress = () => {
    props.onPress && props.onPress(props.data);
  };
  const getTextColorBySelectedState = (isChecked?: boolean) => {
    return isChecked ? getTextColorByBaseColor(props.color) : getDisabledColor(theme);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View isChecked={props.isChecked!} color={props.color} theme={props.theme}>
        <Text color={getTextColorBySelectedState(props.isChecked)}>{props.children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const getDisabledColor = (theme: DefaultTheme) => Color(theme.COMPONENT.TEXT_INPUT.HINT).darken(0.5).hex();
const getSelectedBorderColor = (color: BaseColor) => Color(getHEXColor(color)).darken(0.2).hex();

const View = styled.View`
  ${borderRadiusWrapper}
  ${sharedPadding}
  background: ${(props: IButtonChildProps) => getHEXColor(props.isChecked ? props.color : undefined)};
  border-width: 2px;
  border-color: ${(props: IButtonChildProps) =>
    props.isChecked ? getSelectedBorderColor(props.color) : getDisabledColor(props.theme!)};
  margin-right: 10px;
`;

export { RadioButton };
