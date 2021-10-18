import * as React from "react";
import styled from "styled-components/native";
import { FontSize } from "../enums/Text/FontSize";
import { FontStatus } from "../enums/Text/FontStatus";
import { GetFontSize, GetFontWeight, GetFontStatus } from "../helpers/StyleHelpers";
interface TextProps {
  fontSize?: FontSize;
  fontStatus?: FontStatus;
}
const NativeText = styled.Text`
  font-size: ${(props: TextProps) => GetFontSize(props.fontSize)};
  font-weight: ${(props: TextProps) => GetFontWeight(props.fontSize)};
  color: ${(props: TextProps) => GetFontStatus(props.fontStatus)};
`;

const Text: React.FC<TextProps> = (props) => {
  return (
    <NativeText fontSize={props.fontSize} fontStatus={props.fontStatus}>
      {props.children}
    </NativeText>
  );
};

export { Text };
