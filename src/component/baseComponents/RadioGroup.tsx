import * as React from "react";
import styled, { DefaultTheme, useTheme } from "styled-components/native";

interface RadioGroupProps {
  children: React.ReactNode;
  selectedIndex: number;
  onChange: (index: number) => void;
}
const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const theme: DefaultTheme = useTheme();
  const onRadioChanged = (index: number) => {
    props.onChange && props.onChange(index);
  };
  const children = React.Children.map(props.children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        index: index,
        isChecked: index == props.selectedIndex,
        onChange: () => onRadioChanged(index),
      });
    }
  });
  return <View>{children}</View>;
};

const View = styled.View`
  background: black;
  flex-direction: row;
`;
export { RadioGroup };
