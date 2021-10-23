import * as React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components/native";
import { BaseColor } from "../enums/BaseColor";
import { FontSize } from "../enums/Text/FontSize";
import { GetFontSize, GetFontWeight, getSystemTextColor, getHEXColor } from "../helpers/StyleHelpers";
interface TextProps {
  fontSize?: FontSize;
  color?: BaseColor;
  theme?: DefaultTheme;
}
const NativeText = styled.Text`
  font-size: ${(props: TextProps) => GetFontSize(props.fontSize)};
  font-weight: ${(props: TextProps) => GetFontWeight(props.fontSize)};
  color: ${(props: TextProps) => getHEXColor(props.color == undefined ? getSystemTextColor(props.theme) : props.color)};
`;

const Text: React.FC<TextProps> = (props) => {
  const theme = useTheme();
  return (
    <NativeText fontSize={props.fontSize} color={props.color} theme={theme}>
      {props.children}
    </NativeText>
  );
};

export { Text };
