import * as React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components/native";
import { FontSize } from "../enums/Text/FontSize";
import { GetFontSize, getHEXColor, getSystemTextColor } from "../helpers/StyleHelpers";

interface TextInputProps {
  text?: string;
  placeholder?: string;
  fontSize?: FontSize;
  theme?: DefaultTheme;
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
    />
  );
};

export { TextInput };

const NativeTextInput = styled.TextInput`
  font-size: ${(props: TextInputProps) => GetFontSize(props.fontSize)};
  color: ${(props: TextInputProps) => getHEXColor(getSystemTextColor(props.theme))};
`;
