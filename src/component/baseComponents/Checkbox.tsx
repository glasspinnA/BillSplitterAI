import { Button } from "@ui-kitten/components/ui/button/button.component";
import * as React from "react";
import { Status } from "../../constant/Status";
import { IButtonChildProps } from "../../interfaces/IButtonChild";

const CheckBox = <T extends {}>(
  props: IButtonChildProps<T> & { children: React.ReactNode }
) => {
  const onPress = () => {
    console.log("pressed");

    props.onPress && props.onPress(props.data);
  };

  return (
    <Button
      status={props.isChecked ? Status.PRIMARY : Status.SUCCESS}
      onPress={onPress}
    >
      {props.children as string}
    </Button>
  );
};
export { CheckBox };
