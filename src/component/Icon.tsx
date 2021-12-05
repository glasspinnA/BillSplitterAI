import * as React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { BaseColor } from "../enums/BaseColor";
import { BaseColors } from "../styles/Colors";

interface IconProps {
  icon: IconName;
  color?: BaseColor;
  size?: number;
}

const Icon: React.FC<IconProps> = (props) => {
  return <FontAwesome5 name={props.icon as string} color={props.color ?? BaseColors.BLACK} size={props.size ?? 20} />;
};

class IconName {
  static CHEVRON: string = "chevron-circle-up";
}

export { Icon, IconName };
