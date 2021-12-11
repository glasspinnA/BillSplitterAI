import { Button } from "@ui-kitten/components/ui/button/button.component";
import * as React from "react";
import { IconName, Icon } from "./Icon";

interface AddButtonProps {
  icon?: IconName;
  onPress(): void;
}
const AddButton: React.FC<AddButtonProps> = (props) => {
  const icon = () => <Icon icon={props.icon ?? IconName.PLUS} />;
  return (
    <Button onPress={props.onPress} accessoryLeft={icon}>
      {props.children as string}
    </Button>
  );
};

export { AddButton };
