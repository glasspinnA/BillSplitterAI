import * as React from "react";
import { BaseColor } from "../../enums/BaseColor";
import { IButtonChildProps } from "../../interfaces/IButtonChild";
import { Button } from "./Button";

const CheckBox = <T extends {}>(props: IButtonChildProps<T> & { children: React.ReactNode }) => {
  const onPress = () => {
    props.onPress && props.onPress(props.data);
  };

  return (
    <Button color={props.isChecked ? BaseColor.PRIMARY : BaseColor.SUCCESS} onPress={onPress}>
      {props.children}
    </Button>
  );
};
export { CheckBox };
