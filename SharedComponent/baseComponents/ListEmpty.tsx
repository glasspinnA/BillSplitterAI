import * as React from "react";
import { Text } from "@ui-kitten/components";
import { View } from "react-native";
import { Fontsize } from "../constant/Fontsize";

interface ListEmptyProps {
  title?: string;
}

export const EmptyList: React.FC<ListEmptyProps> = (props) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Text category={Fontsize.H6}>Nothing here yet</Text>
      <Text category={Fontsize.S1}>{props.title}</Text>
    </View>
  );
};
