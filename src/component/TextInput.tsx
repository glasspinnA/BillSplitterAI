import Color from "color";
import * as React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components/native";
import { css } from "styled-components";
import { FontSize } from "../enums/Text/FontSize";
import { FontWeight } from "../enums/Text/FontWeight";
import { GetFontSize, getHEXColor, getSystemTextColor, getFontWeight } from "../helpers/StyleHelpers";
import { borderRadiusWrapper } from "../styles/SharedStyles";

interface TextInputProps {
  text?: string;
  placeholder?: string;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  theme?: DefaultTheme;
  showBackground?: boolean;
  onChangeText: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const theme: DefaultTheme = useTheme();
  return (
    <NativeTextInput
      selectionColor={theme.PRIMARY}
      placeholder={props.placeholder}
      placeholderTextColor={theme.COMPONENT.TEXT_INPUT.HINT}
      value={props.text}
      onChangeText={props.onChangeText}
      fontSize={props.fontSize}
      text={props.text}
      theme={theme}
      showBackground={props.showBackground}
      fontWeight={props.fontWeight}
    />
  );
};

export { TextInput };

const NativeTextInput = styled.TextInput`
  font-size: ${(props: TextInputProps) => GetFontSize(props.fontSize)};
  color: ${(props: TextInputProps) => getHEXColor(getSystemTextColor(props.theme))};
  ${(props: TextInputProps) =>
    props.showBackground &&
    css`
      background: ${Color(props.theme?.BACKGROUND).lighten(0.5).hex()};
      ${borderRadiusWrapper}
      padding-left:5px
    `}
  ${(props: TextInputProps) =>
    props.fontWeight &&
    css`
      font-weight: ${getFontWeight(props.fontWeight)};
    `}
`;
