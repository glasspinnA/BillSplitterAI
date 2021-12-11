import * as React from "react";
import styled from "styled-components/native";
import { IButtonChildProps } from "../../interfaces/IButtonChild";
interface ButtonGroup<T> {
  selectedIndex: number | number[];
  onChange: (data: T, index: number) => void;
}
const ButtonGroup = <T extends {}>(
  props: ButtonGroup<T> & { children: React.ReactNode }
) => {
  const onChange = (data: T, index: number) => {
    props.onChange && props.onChange(data, index);
  };
  const children = React.Children.map(props.children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        isChecked:
          typeof props.selectedIndex == "number"
            ? index == props.selectedIndex
            : props.selectedIndex.indexOf(index) != -1,
        onPress: (data: T) => onChange(data, index),
        index: index,
      } as IButtonChildProps<unknown>);
    }
  });
  return <View>{children}</View>;
};

const View = styled.View`
  flex-direction: row;
`;
export { ButtonGroup };
