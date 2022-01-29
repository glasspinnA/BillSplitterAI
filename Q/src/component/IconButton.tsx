import * as React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Icon } from "../../../SharedComponent/src/Icon";
import { IconName } from "../constant/IconName";

interface IconButtonProps {
  iconName: IconName;
  onPress(): void;
}

export const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Icon icon={props.iconName} />
    </TouchableWithoutFeedback>
  );
};
