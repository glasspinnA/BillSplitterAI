import * as React from "react";
import styled from "styled-components/native";
import { Text } from '@ui-kitten/components';
import { Colors } from "../constant/Colors";
export interface UserIconProps {
  name: string;
}

export function UserIcon(props: UserIconProps) {
  return (
    <Circle>
      <Text>{props.name.substring(0, 1).toUpperCase()}</Text>
    </Circle>
  );
}

const Circle = styled.View`
  background: ${Colors.SUCCESS.value};
  border-radius: 15px;
  width: 30px;
  height: 30px;
  padding: 4px;
  align-items: center;
  margin-horizontal: 2px;
`;
