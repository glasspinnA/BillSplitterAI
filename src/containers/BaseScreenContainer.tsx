import * as React from "react";
import styled from "styled-components/native";
import { Colors } from "../styles/Colors";

interface BaseScreenContainerProps {}
const Container = styled.SafeAreaView`
  background: ${Colors.BACKGROUND};
  flex: 1;
`;

const BaseScreenContainer: React.FC<BaseScreenContainerProps> = (props) => {
  return <Container>{props.children}</Container>;
};

export { BaseScreenContainer };
