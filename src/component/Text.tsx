import * as React from "react";
import styled from "styled-components/native";
import { BaseColor } from "../enums/BaseColor";
import { FontSize } from "../enums/Text/FontSize";
import { GetFontSize, GetFontWeight, getColor } from "../helpers/StyleHelpers";
interface TextProps {
  fontSize?: FontSize;
  color?: BaseColor;
}
const NativeText = styled.Text`
  font-size: ${(props: TextProps) => GetFontSize(props.fontSize)};
  font-weight: ${(props: TextProps) => GetFontWeight(props.fontSize)};
  color: ${(props: TextProps) => getColor(props.color == undefined ? BaseColor.BLACK : props.color)};
`;

const Text: React.FC<TextProps> = (props) => {
  return (
    <NativeText fontSize={props.fontSize} color={props.color}>
      {props.children}
    </NativeText>
  );
};

export { Text };
