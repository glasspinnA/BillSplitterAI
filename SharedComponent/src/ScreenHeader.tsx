import { Text } from "@ui-kitten/components";
import { Fontsize } from "./constant/Fontsize";
import * as React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Text style={{ marginBottom: 5 }} category={Fontsize.H1}>
      {props.children as string}
    </Text>
  );
};
