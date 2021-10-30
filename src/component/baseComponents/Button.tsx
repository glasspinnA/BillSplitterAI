import * as React from "react";
import styled from "styled-components/native";
import { BaseColor } from "../../enums/BaseColor";
import { getHEXColor, getTextColorByBaseColor } from "../../helpers/StyleHelpers";
import { borderRadiusWrapper, sharedPadding } from "../../styles/SharedStyles";
import { Text } from "./Text";

interface ButtonProps {
  onPress: () => void;
  color: BaseColor;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} color={props.color}>
      <Text color={getTextColorByBaseColor(props.color)}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const TouchableOpacity = styled.TouchableOpacity`
  background: ${(props: ButtonProps) => getHEXColor(props.color)};
  align-items: center;
  ${borderRadiusWrapper}
  ${sharedPadding}
`;

export { Button };
