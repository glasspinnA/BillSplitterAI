import * as React from "react";
import { Platform, StatusBar, View } from "react-native";
import { Colors } from "../../constant/Colors";
export interface CustomStatusBarProps {}
export function CustomStatusBar(props: CustomStatusBarProps) {
  const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
  return (
    <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: Colors.getBackgroudColor() }}>
      <StatusBar barStyle={"light-content"} />
    </View>
  );
}
