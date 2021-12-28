import * as React from "react";
import { RoundedButton } from "./baseComponents/Button";
import { IconName, Icon } from "./Icon";

interface AddButtonProps {
  icon?: IconName;
  onPress(): void;
}
const AddButton: React.FC<AddButtonProps> = (props) => {
  const icon = () => <Icon icon={props.icon ?? IconName.PLUS} />;
  return (
    <RoundedButton onPress={props.onPress} accessoryLeft={icon}>
      {props.children as string}
    </RoundedButton>
  );
};

export { AddButton };
