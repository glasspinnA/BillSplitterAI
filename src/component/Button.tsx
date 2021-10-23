import * as React from "react";
import styled from "styled-components/native";
import { getColor } from "../helpers/StyleHelpers";
import { Colors } from "../styles/Colors";
import { borderRadiusWrapper } from "../styles/SharedStyles";
import { Text } from "./Text";

interface ButtonProps {
  onPress: () => void;
  color?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} color={props.color}>
      <Text fontColor={Colors.BACKGROUND}>Hello</Text>
    </TouchableOpacity>
  );
};

const TouchableOpacity = styled.TouchableOpacity`
  background: ${(props: ButtonProps) => getColor(props.color)};
  align-items: center;
  ${borderRadiusWrapper}
`;

export { Button };
