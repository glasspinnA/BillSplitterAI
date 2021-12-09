import * as React from "react";
import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import { borderRadiusWrapper, sharedPadding } from "../../styles/SharedStyles";
import Color from "color";
import { Text } from "@ui-kitten/components";

import { IButtonChildProps } from "../../interfaces/IButtonChild";
import { Colors } from "../../constant/Colors";

const RadioButton = <T extends {}>(props: IButtonChildProps<T> & { children: React.ReactNode }) => {
  const onPress = () => {
    props.onPress && props.onPress(props.data);
  };
  const getTextColorBySelectedState = (isChecked?: boolean): string => {
    return isChecked ? props.color : Colors.DISABLED;
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View isChecked={props.isChecked!} color={props.color} theme={props.theme}>
        <Text style={{color: getTextColorBySelectedState(props.isChecked)}}>{(props.children as string)}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const getSelectedBorderColor = (color: Colors) => Color(color).darken(0.2).hex();

const View = styled.View`
  ${borderRadiusWrapper}
  ${sharedPadding}
  background: ${(props: IButtonChildProps) => (props.isChecked ? props.color : undefined)};
  border-width: 2px;
  border-color: ${(props: IButtonChildProps) =>
    props.isChecked ? getSelectedBorderColor(props.color) : Colors.DISABLED};
  margin-right: 10px;
`;

export { RadioButton };
