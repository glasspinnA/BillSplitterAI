import * as React from "react";
import styled from "styled-components/native";
import { FontSize } from "../enums/Text/FontSize";
import { GetFontSize } from "../helpers/StyleHelpers";
import { Colors } from "../styles/Colors";

interface TextInputProps {
  text?: string;
  placeholder?: string;
  fontSize?: FontSize;
  onChangeText: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <NativeTextInput
      selectionColor={Colors.TextInput.SELECTOR}
      placeholder={props.placeholder}
      placeholderTextColor={Colors.TextInput.HINT}
      value={props.text}
      onChangeText={props.onChangeText}
      fontSize={props.fontSize}
      text={props.text}
    />
  );
};

export { TextInput };

const NativeTextInput = styled.TextInput`
  font-size: ${(props: TextInputProps) => GetFontSize(props.fontSize)};
`;
