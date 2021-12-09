import { useTheme } from "@ui-kitten/components/theme/theme/theme.service";
import * as React from "react";
import { Platform, StatusBar, View } from "react-native";
import { Colors } from "../constant/Colors";
export interface CustomStatusBarProps {}
export function CustomStatusBar(props: CustomStatusBarProps) {
  const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;
  const theme = useTheme();
  return (
    <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: theme[Colors.BACKGROUND] }}>
      <StatusBar barStyle={"dark-content"} />
    </View>
  );
}
