import * as React from "react";
import styled from "styled-components/native";
import { BaseColors } from "../styles/Colors";
import { Text } from "./baseComponents/Text";

export interface UserIconProps {
  name: string;
  color?: string;
}

export function UserIcon(props: UserIconProps) {
  return (
    <Circle>
      <Text>{props.name.substr(0, 1).toUpperCase()}</Text>
    </Circle>
  );
}

const Circle = styled.View`
  background: ${BaseColors.SUCCESS};
  border-radius: 15px;
  width: 30px;
  height: 30px;
  padding: 4px;
  align-items: center;
  margin-horizontal: 2px;
`;
