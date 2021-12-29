import { useTheme } from "@ui-kitten/components";
import * as React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../constant/Colors";

interface IconProps {
  icon: IconName;
  color?: Colors;
  size?: number;
}

const Icon: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  return (
    <FontAwesome5
      name={props.icon as string}
      color={(props.color ?? theme[Colors.BASIC_COLOR.key!]) as string}
      size={props.size ?? 20}
    />
  );
};

class IconName {
  static CHEVRON: string = "chevron-circle-down";
  static PLUS: string = "plus-circle";
  static CONTEXT_MENU: string = "ellipsis-v";
  static TRASH: string = "trash";
  static EDIT_PEN: string = "pen";
}

export { Icon, IconName };
