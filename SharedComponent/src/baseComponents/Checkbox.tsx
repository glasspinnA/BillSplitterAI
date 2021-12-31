import { EvaStatus } from "@ui-kitten/components/devsupport";
import { Button } from "@ui-kitten/components/ui/button/button.component";
import * as React from "react";
import { Status } from "../constant/Status";
import { IButtonChildProps } from "../../../BillSplitterAI/src/interfaces/IButtonChild";

const CheckBox = <T extends {}>(props: IButtonChildProps<T> & { children: React.ReactNode }) => {
  const onPress = () => props.onPress && props.onPress(props.data);
  const [background, setBackground] = React.useState<EvaStatus>();

  React.useEffect(() => {
    setBackground(getRandomBackground() as EvaStatus);
  }, []);

  const getRandomBackground = (): string => {
    const value = Math.floor(Math.random() * 5);
    switch (value) {
      case 0:
        return Status.DANGER;
      case 1:
        return Status.WARNING;
      case 2:
        return Status.PRIMARY;
      case 3:
        return Status.SUCCESS;
      default:
        return Status.INFO;
    }
  };

  return (
    <Button
      style={{ marginRight: 10, marginVertical: 10 }}
      status={background}
      appearance={props.isChecked ? "filled" : "outline"}
      onPress={onPress}
    >
      {props.children as string}
    </Button>
  );
};
export { CheckBox };
