import * as React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components/native";
import { BaseColors } from "../styles/Colors";

interface BaseScreenContainerProps {
  theme?: DefaultTheme;
}

const Container = styled.SafeAreaView`
  background: ${(props: BaseScreenContainerProps) => props.theme?.BACKGROUND};
  flex: 1;
`;

const View = styled.View`
  flex: 1;
  margin-horizontal: 5px;
`;

const BaseScreenContainer: React.FC<BaseScreenContainerProps> = (props) => {
  const theme = useTheme();
  return (
    <Container theme={theme}>
      <View>{props.children}</View>
    </Container>
  );
};

export { BaseScreenContainer };
