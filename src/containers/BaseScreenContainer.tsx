import * as React from "react";
import styled from "styled-components/native";
import { BaseColors } from "../styles/Colors";

interface BaseScreenContainerProps {}
const Container = styled.SafeAreaView`
  background: ${BaseColors.WHITE};
  flex: 1;
`;

const BaseScreenContainer: React.FC<BaseScreenContainerProps> = (props) => {
  return <Container>{props.children}</Container>;
};

export { BaseScreenContainer };
